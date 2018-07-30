import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MemberCareGaps } from '../../shared/services/gaps.data';
import { GapsService } from '../../shared/services/gaps.service';

@Component({
    selector: 'app-tables',
    templateUrl: './measure-library.component.html',
    styleUrls: ['./measure-library.component.scss'],
    animations: [routerTransition()],
    providers: [GapsService]
})
export class MeasurelibraryComponent implements OnInit {
    constructor(private gapsService: GapsService) {}
    membergaps: MemberCareGaps[];
    cols: any[];
    ngOnInit() {
        this.gapsService.getLibrary().subscribe((data: MemberCareGaps[]) => {
            this.membergaps = data;
        });
        this.cols = [
            { field: 'id', header: 'Measure ID' },
            { field: 'name', header: 'Measure Name' },
            { field: 'programName', header: 'Program Name' },
            { field: 'type', header: 'Measure Type' },
            { field: 'steward', header: 'Measure Steward' },
            { field: 'clinocalCondition', header: 'Clinical Condition' },
        ];
    }
}
