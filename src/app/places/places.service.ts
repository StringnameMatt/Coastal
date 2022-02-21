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
      'Cheer Tryouts 5:30pm',
      'Cheer tryouts are here in Gleneden beach! We will start with a parent meeting from 5pm-5:30pm going over all the exciting things their children will be apart of this upcoming cheer season! Please make sure your children are wearing shorts, t shirt, and tennis shoes! Waters will be provided, but you’re welcome to bring a water bottle for your child! Can’t wait to see you all there ',
      'https://scontent.fhio2-2.fna.fbcdn.net/v/t39.30808-6/272338220_100226169248974_5810574067461201063_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nsZnkqLD-PsAX918rfz&_nc_ht=scontent.fhio2-2.fna&oh=00_AT-bq-fYIVa9uElecr74_B2Gr6NqgvG9T1_xFqjITv5sbw&oe=6217F33E',
      200,
      new Date('2022-05-22'),
      new Date('2022-05-22'),
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
