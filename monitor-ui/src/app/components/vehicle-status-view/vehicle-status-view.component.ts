import { Component, Input, OnInit } from '@angular/core';
import { VehicleStatus } from '../../modules/vehicle';
import { VehicleQuery } from '../../state/vehicle-state/vehicle.query';

@Component({
  selector: 'app-vehicle-status-view',
  templateUrl: './vehicle-status-view.component.html',
  styleUrls: ['./vehicle-status-view.component.scss']
})
export class VehicleStatusViewComponent implements OnInit {
  @Input() vehicleStatus: VehicleStatus;

  constructor(private readonly vehicleQuery: VehicleQuery) { }

  ngOnInit() {
  }

  get model() {
    return this.vehicleQuery.getVehicleModelById(this.vehicleStatus.vehicleId);
  }

}
