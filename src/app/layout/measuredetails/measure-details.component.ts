import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MemberCareGaps } from '../../shared/services/gaps.data';
import { GapsService } from '../../shared/services/gaps.service';

@Component({
    selector: 'app-tables',
    templateUrl: './measure-details.component.html',
    styleUrls: ['./measure-details.component.scss'],
    animations: [routerTransition()],
    providers: [GapsService]
})
export class MeasuredetailsComponent implements OnInit {
    constructor(private gapsService: GapsService) {}
    membergaps: MemberCareGaps[];
    cols: any[];
     genderTypes =  [
        { label: 'Select', value: '' },
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ];
    ngOnInit() {
        this.gapsService.getMeasureDetails().subscribe((data: MemberCareGaps[]) => {
            this.membergaps = data;
        });
        this.cols = [
            { field: 'id', header: 'Member Id' },
            { field: 'age', header: 'Age' },
            { field: 'gender', header: 'Gender' },
            { field: 'name', header: 'Name' },
            { field: 'hccScore', header: 'MRI Score' },
            { field: 'amount', header: 'Amount' },
            { field: 'reason', header: 'Reason' },
        ];
    }
}
