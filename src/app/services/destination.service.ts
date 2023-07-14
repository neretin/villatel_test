import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

export type Destination = {
  id?: number;
  label?: string;
};

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor() {}

  getDestinations(): Observable<Destination[]> {
    return of([
      {
        id: 1,
        label: 'Orlando, FL',
      },
      {
        id: 2,
        label: 'Melbourne Beach, FL',
      },
    ]);
  }
}
