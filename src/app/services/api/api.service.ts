import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  banners = [
    {banners: 'assets/imgs/addy.jpg'},
    {banners: 'assets/imgs/group.jpg'},
  ];

  constructor() { }

  
}
