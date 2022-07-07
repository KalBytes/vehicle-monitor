import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const VehicleRoute: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(VehicleRoute)],
})
export class MainPageRoutingModule {}
