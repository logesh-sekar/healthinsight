import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MemberCareGaps } from '../../shared/services/gaps.data';
import { GapsService } from '../../shared/services/gaps.service';

@Component({
    selector: 'app-tables',
    templateUrl: './member-care-gaplist.component.html',
    styleUrls: ['./member-care-gaplist.component.scss'],
    animations: [routerTransition()],
    providers: [GapsService]
})
export class MemberCareGapListComponent implements OnInit {
    constructor(private gapsService: GapsService) {}
    membergaps: MemberCareGaps[];
    cols: any[];
    genderTypes =  [
        { label: 'Select', value: '' },
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ];
    ngOnInit() {
        this.gapsService.getMemberGaps().subscribe((data: MemberCareGaps[]) => {
            this.membergaps = data['data'];
        });
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'age', header: 'Age' },
            { field: 'gender', header: 'Gender' },
            { field: 'pcp', header: 'PCP' },
            { field: 'care_gaps', header: 'Care Gaps' },
            { field: 'care_gaps_count', header: 'Count of Care Gaps' },
            { field: 'risk_grade', header: 'Risk Grade' },
            { field: 'plan', header: 'Plan' },
            { field: 'time_period', header: 'Time Period' },

        ];
    }
}
