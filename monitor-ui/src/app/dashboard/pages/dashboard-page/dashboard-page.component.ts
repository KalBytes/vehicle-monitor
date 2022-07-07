import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MapMarker } from '../../../modules/map';
import { VehicleService } from '../../../state';
import { WebSocketsService } from '../../../web-sockets';
import { VehicleQuery } from '../../../state/vehicle-state/vehicle.query';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { VehicleStore } from '../../../state/vehicle-state/vehicle.store';
import { Vehicle, VehicleStatus } from '../../../modules/vehicle';
import { CAMERA_TABLE_COLUMNS, RADAR_TABLE_COLUMNS } from '../../constant';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

@UntilDestroy()
export class DashboardPageComponent implements OnInit {
  public mapMarkers: MapMarker[];
  public activeVehicle: Vehicle;

  public cameraTableColumns = CAMERA_TABLE_COLUMNS;
  public radarTableColumns = RADAR_TABLE_COLUMNS;

  constructor(
    private readonly vehicleService: VehicleService,
    private readonly webSocketsService: WebSocketsService,
    private readonly vehicleQuery: VehicleQuery,
    private readonly vehicleStatusStore: VehicleStore,
    ) { }

  ngOnInit() {
    this.vehicleService.getVehicles();
    this.webSocketsService.initWebSocketConnection();
    this._selectVehiclesMapMarkers();
    this._selectActiveVehicle();
  }

  onMarkerClick(vehicleId: string): void {
    this.vehicleStatusStore.setActive(vehicleId);
  }



  _selectActiveVehicle(): void {
    this.vehicleQuery.selectActive().pipe(
      untilDestroyed(this),
    ).subscribe((vehicle: Vehicle) => {
      this.activeVehicle = vehicle;
    });
  }

  _selectVehiclesMapMarkers(): void {
    this.vehicleQuery.selectVehicleMapMarkers().pipe(
      untilDestroyed(this),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      filter((markers: MapMarker[]) => !markers.includes(undefined))
    ).subscribe((markers: MapMarker[]) => {
      this.mapMarkers = markers;
    });
  }
}
