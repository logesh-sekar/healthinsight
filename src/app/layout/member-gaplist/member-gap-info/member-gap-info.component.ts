import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Gaps } from '../../../shared/services/gaps.data';
import { GapsService } from '../../../shared/services/gaps.service';

@Component({
    selector: 'app-tables',
    templateUrl: './member-gap-info.component.html',
    styleUrls: ['./member-gap-info.component.scss'],
    animations: [routerTransition()],
    providers: [GapsService]
})
export class MemberGapInfoComponent implements OnInit {
    gaps: Gaps;
    cols: any[];
    gapId: number;
    statusTypes =  [ { label: 'Open', value: 'Open' }, { label: 'Closed', value: 'Closed' }];
    priorityTypes =  [ { label: 'High', value: 'High' }, { label: 'Low', value: 'Low' }, { label: 'Medium', value: 'Medium' }];

    constructor(private gapsService: GapsService,
        private route: ActivatedRoute) {
            this.route.params.subscribe(params => {
                this.gapId = params['gap_id'];
            });
        }

    ngOnInit() {
        this.gapsService.getGapsInfo(this.gapId).subscribe((data: Gaps) => {
            this.gaps = data;
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
