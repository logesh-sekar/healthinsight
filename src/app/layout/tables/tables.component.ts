import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Gaps } from '../../shared/services/gaps.data';
import { GapsService } from '../../shared/services/gaps.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers: [GapsService]
})
export class TablesComponent implements OnInit {
    constructor(private gapsService: GapsService) {}
    gaps: Gaps[];
    cols: any[];
    statusTypes =  [ { label: 'Open', value: 'Open' }, { label: 'Closed', value: 'Closed' }];
    priorityTypes =  [ { label: 'High', value: 'High' }, { label: 'Low', value: 'Low' }, { label: 'Medium', value: 'Medium' }];

    ngOnInit() {
        this.gapsService.getGaps().subscribe((data: Gaps[]) => {
            this.gaps = data['data'];
        });
        this.cols = [
            { field: 'care_gaps', header: 'Care Gaps' },
            { field: 'interventions', header: 'Interventions' },
            { field: 'priority', header: 'Priority' },
            { field: 'comments', header: 'Comments' },
            { field: 'status', header: 'Status' }
        ];
    }
}
