import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { APIService, MockDrivingService, VehicleService } from '../../services';
import { Vehicle } from '../../types';
import { map} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {
  public activeVehicle: Vehicle;
  constructor(
    private readonly apiService: APIService,
    private readonly vehicleService: VehicleService,
    private readonly mockDrivingService: MockDrivingService
    ) { }

  ngOnInit() {
    this._listenToActiveVehicle();
    this._initMockDriving();
  }

  _listenToActiveVehicle(): void {
    this.vehicleService.selectActive().pipe(untilDestroyed(this)).subscribe((vehicle: Vehicle) => {
      this.activeVehicle = vehicle;
    });
  }

  _initMockDriving(): void {
    this.apiService.getVehicles().pipe(
      untilDestroyed(this),
      map((vehicles: Vehicle[]) => vehicles.map((vehicle: Vehicle) => vehicle.id))
    ).subscribe(
      (vehicleIds: string[]) => {
        vehicleIds.forEach((id: string) => {
          this.mockDrivingService.drive(id);
        });
      }
    );
  }
}
