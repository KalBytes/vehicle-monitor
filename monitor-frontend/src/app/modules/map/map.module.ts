import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components';
import { environment } from '@env/environment.base';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey,
    })
  ],
  exports: [MapComponent],
  bootstrap: []
})
export class MapModule { }
