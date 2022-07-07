
import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Vehicle } from '../../modules/vehicle';

export interface VehicleState extends EntityState<Vehicle, string>, ActiveState {
}

const createInitialStepsState: () => VehicleState = () => {
  return {
    active: null
  };
};


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'vehicle' })
export class VehicleStore extends EntityStore<VehicleState> {
  constructor() {
    super(createInitialStepsState());
  }
}
