import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Gaps, CloseGaps } from '../../../shared/services/gaps.data';
import { GapsService } from '../../../shared/services/gaps.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-tables',
    templateUrl: './member-gap-info.component.html',
    styleUrls: ['./member-gap-info.component.scss'],
    animations: [routerTransition()],
    providers: [GapsService]
})
export class MemberGapInfoComponent implements OnInit {
    closeGaps: CloseGaps;
    gaps: any;
    cols: any[];
    gapId: string;
    memberId: number;
    statusTypes =  [
        { label: 'Open', value: 'Open' },
        { label: 'New', value: 'New' },
        { label: 'Rejected', value: 'Rejected' },
        { label: 'Approved', value: 'Approved' },
        { label: 'Under Development', value: 'Under Development' },
        { label: 'Active', value: 'Active' },
        { label: 'In-active', value: 'In-active' },
        { label: 'New', value: 'New' }
    ];
    priorityTypes =  [ { label: 'High', value: 'High' }, { label: 'Low', value: 'Low' }, { label: 'Medium', value: 'Medium' }];
    public closeGapForm: FormGroup;
    constructor(private gapsService: GapsService,
        private _fb: FormBuilder,
        private route: ActivatedRoute) {
            this.route.params.subscribe(params => {
                this.gapId = params['gapId'];
                this.memberId = params['memberId'];
            });
            this.closeGapForm = this._fb.group({
                priority: [],
                status: [],
                intervention: [],
                payerComments: [],
                providerComments: []
            });
        }

    ngOnInit() {
        this.gapsService.getGapsInfo(this.gapId, this.memberId).subscribe((data: CloseGaps) => {
            this.closeGaps = data;
            const gapsArray = this.closeGaps.careGaps;
            if (gapsArray.length) {
                this.gaps = gapsArray;
                this.closeGapForm.controls['priority'].setValue(gapsArray[0].priority);
                this.closeGapForm.controls['status'].setValue(gapsArray[0].status);
                this.closeGapForm.controls['intervention'].setValue(gapsArray[0].intervention);
                this.closeGapForm.controls['payerComments'].setValue(gapsArray[0].payerComments);
                this.closeGapForm.controls['providerComments'].setValue(gapsArray[0].providerComments);
            }
        });
        this.cols = [
            { field: 'measureTitle', header: 'Care Gaps' },
            { field: 'intervention', header: 'Interventions' },
            { field: 'priority', header: 'Priority' },
            { field: 'payerComments', header: 'Payer Comments' },
            { field: 'providerComments', header: 'Provider Comments' },
            { field: 'status', header: 'Status' },
            { field: 'dateTime', header: 'Date & Time' },
        ];
    }
    onSubmit(formModel) {
        this.gapsService.updateCloseGaps(formModel, this.memberId, this.gapId).subscribe((res: any) => {
            console.log(res);
        });
    }
}
