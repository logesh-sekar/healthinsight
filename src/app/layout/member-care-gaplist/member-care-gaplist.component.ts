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
    membergaps = [];
    cols: any[];
    loading = true;
    genderTypes =  [
        { label: 'Select', value: '' },
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' }
    ];
    ngOnInit() {
        this.gapsService.getMemberGaps().subscribe((data: any) => {
            this.loading = false;
            this.membergaps = [];
            data.forEach( item => {
                const memgpItem: any = {};
                memgpItem.name = item.name;
                memgpItem.age = item.age;
                memgpItem.gender = item.gender;
                memgpItem.countOfCareGaps = item.countOfCareGaps;
                memgpItem.riskGrade = item.riskGrade;
                if (item.members.length > 0) {
                    memgpItem.pcp = item.members[0].pcp;
                    memgpItem.careGaps = item.members[0].careGaps;
                    memgpItem.plan = item.members[0].plan;
                    memgpItem.timePeriod = item.members[0].timePeriod;
                }
                this.membergaps.push(memgpItem);
            });
        });
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'age', header: 'Age' },
            { field: 'gender', header: 'Gender' },
            { field: 'pcp', header: 'PCP' },
            { field: 'careGaps', header: 'Care Gaps' },
            { field: 'countOfCareGaps', header: 'Count of Care Gaps' },
            { field: 'riskGrade', header: 'Risk Grade' },
            { field: 'plan', header: 'Plan' },
            { field: 'timePeriod', header: 'Time Period' },

        ];
    }
}
