import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class VehicleService {
  selectAll(): Observable<any> {
    return of();
  }
  selectActive(): Observable<any> {
    return of();
  }
}
