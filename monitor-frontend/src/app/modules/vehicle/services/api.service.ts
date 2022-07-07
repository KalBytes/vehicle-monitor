import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { VehicleStatus, CameraData, RadarData, Vehicle } from '../types';
import { Observable } from 'rxjs';


@Injectable()
export class APIService {
  constructor(private readonly http: HttpClient){}
  updateVehicleStatus(vehicleStatus: VehicleStatus): void {
    this.http.post(`${environment.vehicleURL}/${vehicleStatus.vehicleId}/update`, vehicleStatus).subscribe();
  }

  updateCameraSensor(cameraSensorData: CameraData): void {
    this.http.post(`${environment.vehicleURL}/${cameraSensorData.vehicleId}/camera`, cameraSensorData).subscribe();
  }

  updateRadarSensor(radarSensorData: RadarData): void {
    this.http.post(`${environment.vehicleURL}/${radarSensorData.vehicleId}/radar`, radarSensorData).subscribe();
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(environment.vehicleURL);
  }
}
