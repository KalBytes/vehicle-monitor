import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { VehicleStore } from './vehicle.store';
import { VehicleQuery } from './vehicle.query';
import { Vehicle } from '../../modules/vehicle/types/vehicle';
import { CameraData, RadarData, VehicleStatus } from '../../modules/vehicle';
import { arrayAdd } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  constructor(
    private readonly http: HttpClient,
    private readonly vehicleQuery: VehicleQuery,
    private readonly vehicleStore: VehicleStore){}

  getVehicles(): void {
    this.http.get(environment.vehicleURL).subscribe((vehicles: Vehicle[]) => {
      this.vehicleStore.add(vehicles);
    });
  }

  updateVehicleCameraData(cameraData: CameraData): void {
    this.vehicleStore.update(cameraData.vehicleId, ({ camera }) => ({
      camera: arrayAdd(camera, cameraData)
    }));
  }

  updateVehicleRadarData(radarData: RadarData): void {
    this.vehicleStore.update(radarData.vehicleId, ({ radar }) => ({
      radar: arrayAdd(radar, radarData)
    }));
  }

  updateVehicleStatus(vehicleStatus: VehicleStatus) {
    this.vehicleStore.update(vehicleStatus.vehicleId, () => ({
     status: vehicleStatus
    }));
  }

}
