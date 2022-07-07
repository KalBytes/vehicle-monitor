import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MAP_CONFIG } from '../../constants';
import { MapConfig, MapMarker } from '../../types';

const MARKER_ICON = '../../../../../assets/Logo_svg_2.svg';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Output() markerClick: EventEmitter<any> = new EventEmitter();
  @Input() markers: MapMarker[];

  public mapConfig: MapConfig = MAP_CONFIG;
  public markerIcon: string = MARKER_ICON;

  constructor() {
  }

ngOnChanges() {
}
  clickedMarker(value: unknown): void {
    this.markerClick.emit(value);
  }
}
