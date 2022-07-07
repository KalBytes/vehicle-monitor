import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MapMarker } from '../../modules/map';
import { Vehicle, VehicleStatus } from '../../modules/vehicle';
import { VehicleState, VehicleStore } from './vehicle.store';

@Injectable({
  providedIn: 'root'
})

export class VehicleQuery extends QueryEntity<VehicleState> {
  constructor(protected store: VehicleStore) {
    super(store);
  }

  selectVehicleMapMarkers(): Observable<MapMarker[]> {
    return this.selectAll().pipe(
      filter((vehicles: Vehicle[]) => vehicles && !!vehicles.length),
      map((vehicles: Vehicle[]) => this._createMapMarkersFromVehiclesList(vehicles)));
  }

  _createMapMarkersFromVehiclesList(vehicles: Vehicle[]): MapMarker[] {
    return vehicles.map((vehicle: Vehicle) => {
      if (vehicle.status) {
        return {
          label: vehicle.model,
          latitude: vehicle.status.currentLatitude,
          longitude: vehicle.status.currentLongitude,
          clickValue: vehicle.id
        };
      }
    });
  }

  getVehicleModelById(vehicleId: string): string {
    return this.getEntity(vehicleId).model;
  }
}
