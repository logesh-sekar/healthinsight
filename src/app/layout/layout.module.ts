import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MemberGapListComponent } from './member-gaplist/member-gaplist.component';
import { MemberGapInfoComponent } from './member-gaplist/member-gap-info/member-gap-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageHeaderModule } from '../shared/modules/page-header/page-header.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ProgramcreatorComponent } from './programcreator/programcreator.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        TableModule,
        DropdownModule,
        PageHeaderModule,
        ReactiveFormsModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        MemberGapListComponent,
        DashboardComponent,
        MemberGapInfoComponent,
        ProgramcreatorComponent],

})
export class LayoutModule {}
