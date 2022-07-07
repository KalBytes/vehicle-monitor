import { TableColumn } from '../types';


export const CAMERA_TABLE_COLUMNS: TableColumn[] = [
  { label: 'ID', columnName: 'vehicleId' },
  { label: 'Camera A', columnName: 'camInfoA' },
  { label: 'Camera B', columnName: 'camInfoB' },
];

export const RADAR_TABLE_COLUMNS: TableColumn[] = [
  { label: 'ID', columnName: 'vehicleId' },
  { label: 'Radar A', columnName: 'radarInfoA' },
  { label: 'Radar B', columnName: 'radarInfoB' },
];
