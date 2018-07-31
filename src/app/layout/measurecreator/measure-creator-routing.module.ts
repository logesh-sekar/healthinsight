import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasurecreatorComponent } from './measure-creator.component';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
    {
        path: '', component: MeasurecreatorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
export class MeasureCreatorRoutingModule {
}
