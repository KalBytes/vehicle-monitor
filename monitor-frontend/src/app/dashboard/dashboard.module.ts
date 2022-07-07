import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MapModule } from '../modules/map/map.module';
import { CommonModule } from '@angular/common';
import { VehicleModule } from '../modules/vehicle/vehicle.module';
import { VehicleQuery } from '../state';
import { VehicleService } from '../modules/vehicle/services/vehicle.service';
import { WebSocketsModule } from '../web-sockets/web-sockets.module';
import { DefaultViewComponent, VehicleStatusViewComponent } from '../components';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from '../components/material-table/material-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    MatTableModule,
    MatIconModule,
    RouterModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MapModule,
    WebSocketsModule,
    VehicleModule.forRoot({
      providers: [
        {provide: VehicleService, useExisting: VehicleQuery}
      ]
    }),
    CommonModule,
  ],
  declarations: [
    DashboardPageComponent,
    VehicleStatusViewComponent,
    DefaultViewComponent,
    MaterialTableComponent,
    DefaultViewComponent,
     ],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
