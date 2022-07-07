import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './config/stomp.config';
import { WebSocketsService } from './web-sockets.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    WebSocketsService,
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
  ],
  bootstrap: [],
  exports: []
})
export class WebSocketsModule {}

