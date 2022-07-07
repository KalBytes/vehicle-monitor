import { Injectable } from '@angular/core';
import { VehicleService } from '../state';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { environment } from '@env/environment.base';
import { CameraData, RadarData, VehicleStatus } from '../modules/vehicle';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {
  constructor(
    private readonly vehicleService: VehicleService,
    private readonly rxStompService: RxStompService
    ) {}

  initWebSocketConnection(): void {
    const pathPrefix = environment.webSockets.prefix;
    this.rxStompService.watch(`/${pathPrefix}/status`).subscribe((message: Message) => {
      const status: VehicleStatus = JSON.parse(message.body);
      this.vehicleService.updateVehicleStatus(status);
    });
    this.rxStompService.watch(`/${pathPrefix}/camera`).subscribe((message: Message) => {
      const cameraData: CameraData = JSON.parse(message.body);
      this.vehicleService.updateVehicleCameraData(cameraData);
    });
    this.rxStompService.watch(`/${pathPrefix}/radar`).subscribe((message: Message) => {
      const radarData: RadarData = JSON.parse(message.body);
      this.vehicleService.updateVehicleRadarData(radarData);
    });
  }
}
