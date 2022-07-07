import { Injectable } from '@angular/core';
import { merge, Observable, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CameraData, VehicleStatus, RadarData } from '../types';
import {
  generateRandomSpeed,
  generateRandomTemp,
  getRandomPosition,
} from '../utils/random-data.util';
import { APIService } from './api.service';

const SENSORS_INTERVAL_TIMEOUT = 10000;

@Injectable()
export class MockDrivingService {
  constructor(private readonly apiService: APIService) {}
  drive(vehicleId: string): void {
    setInterval(() => {
     this._executeUpdates(vehicleId);
    }, SENSORS_INTERVAL_TIMEOUT);
  }

  _executeUpdates(vehicleId: string) {
    this._updateCameraSensor(vehicleId);
    this._updateRadarSensor(vehicleId);
    this._updateStatus(vehicleId);
  }

  _updateStatus(vehicleId: string): void {
    const status: VehicleStatus = this._createMockStatusData(vehicleId);
    this.apiService.updateVehicleStatus(status);
  }

  _createMockStatusData(vehicleId: string): VehicleStatus {
    const position = getRandomPosition();
    return {
      vehicleId,
      speed: generateRandomSpeed(),
      temperature: generateRandomTemp(),
      currentLatitude: position.latitude,
      currentLongitude: position.longitude,
    };
  }

  _updateCameraSensor(vehicleId: string): void {
    const cameraData: CameraData = {
      camInfoA: this.randomNumber,
      camInfoB: this.randomNumber,
      vehicleId,
    };
    return this.apiService.updateCameraSensor(cameraData);
  }

  _updateRadarSensor(vehicleId: string): void {
    const radarData: RadarData = {
      radarInfoA: this.randomNumber,
      radarInfoB: this.randomNumber,
      vehicleId,
    };

    return this.apiService.updateRadarSensor(radarData);
  }

  get randomNumber(): number {
    return Math.floor(Math.random() * 2000);
  }
}
