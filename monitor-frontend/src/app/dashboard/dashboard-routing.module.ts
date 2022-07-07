import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const DashboardRoute: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(DashboardRoute)],
})
export class DashboardRoutingModule {}
