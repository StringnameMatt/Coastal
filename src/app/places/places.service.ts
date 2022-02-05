import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Winter Camp',
      'A cheer camp in winter!',
      'https://scontent.fhio2-1.fna.fbcdn.net/v/t39.30808-6/244686754_4345674442216993_2308884096816042397_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=115BgO9ytkUAX9H0qCK&_nc_ht=scontent.fhio2-1.fna&oh=00_AT-0CZBpk9x5_DB9QvabqZaclJ90ItKRPijF7-MULihP2w&oe=6202CE26',
      200,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      "Summer Camp",
      'A cheer camp in summer!',
      'https://scontent.fhio2-2.fna.fbcdn.net/v/t39.30808-6/272514663_4716248198492947_822925554157678348_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=OTLsNJ872SkAX_poj4z&_nc_ht=scontent.fhio2-2.fna&oh=00_AT8BB3A-WJ1ddI2wajZSLL5HIuJkpkAYPHjqaNFPrNwe-Q&oe=62038BF8',
      250,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
   
  ]);

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) {}

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
        return { ...places.find(p => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
