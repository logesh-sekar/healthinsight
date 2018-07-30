import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MemberCareGaps } from '../../shared/services/gaps.data';
import { GapsService } from '../../shared/services/gaps.service';

@Component({
    selector: 'app-tables',
    templateUrl: './measure_worklist.component.html',
    styleUrls: ['./measure-worklist.component.scss'],
   
    animations: [routerTransition()],
    providers: [GapsService]
})
export class MeasureworklistComponent implements OnInit {
    constructor(private gapsService: GapsService) {}
    membergaps: MemberCareGaps[];
    cols: any[];
    ngOnInit() {
        this.gapsService.getWorkList().subscribe((data: MemberCareGaps[]) => {
            this.membergaps = data;
        });
        this.cols = [
            { field: 'id', header: 'Measure ID' },
            { field: 'name', header: 'Measure Name' },
            { field: 'programName', header: 'Program Name' },
            { field: 'status', header: 'Status' },
            { field: 'reviewComments', header: 'Review Comments' },
         
            { field: 'reviewedBy', header: 'Reviewed By' },
           

        ];
    }
}
