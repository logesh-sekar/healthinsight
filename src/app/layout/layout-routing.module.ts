import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MemberCareGapListComponent } from './member-care-gaplist/member-care-gaplist.component';
import { MemberGapListComponent } from './member-gaplist/member-gaplist.component';
import { MemberGapInfoComponent } from './member-gaplist/member-gap-info/member-gap-info.component';
import { ProgramcreatorComponent } from './programcreator/programcreator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'member-gap-list/:memberId', component: MemberGapListComponent },
            { path: 'member-care-gap-list', component: MemberCareGapListComponent },
            { path: 'member-gap/:gapId/:memberId', component: MemberGapInfoComponent },
            { path: 'programcreator', component: ProgramcreatorComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
