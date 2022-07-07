import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { MockDrivingService, APIService, VehicleService } from './services';
import { VehicleViewComponent } from './components';

@NgModule({
  declarations: [VehicleViewComponent],
  imports: [
    CommonModule,
  ],
  providers: [VehicleService, MockDrivingService, APIService],
  bootstrap: [],
  exports: [VehicleViewComponent]
})
export class VehicleModule {
  static forRoot(config: VehicleVieModuleConfig): ModuleWithProviders<VehicleModule> {
    return {
      ngModule: VehicleModule,
      providers: [...config.providers]
    };
  }
 }

type VehicleVieModuleConfig = {
  providers: Provider[];
};
