import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Villa = {
  id: number;
  price: number;
  description: string;
  image: string;
};

@Injectable({
  providedIn: 'root',
})
export class SearchVillaService {
  constructor() {}

  findOptions(): Observable<Villa[]> {
    return of([
      {
        id: 1,
        image: 'villa1.jpeg',
        description: 'nice villa',
        price: 237,
      },
    ]);
  }
}
