import { VehicleStatus } from '.';
import { CameraData } from './camera';
import { RadarData } from './radar';

export type Vehicle = {
  id: string;
  licensePlate: string;
  model: string;
  status: VehicleStatus
  radar: RadarData[];
  camera: CameraData[];
  image: string
};

// @deprecated
enum VehicleModels {
  I4,
  IX3
}
