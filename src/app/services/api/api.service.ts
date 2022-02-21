import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  banners = [
    {banners: 'assets/imgs/1.jpg'},
    {banners: 'assets/imgs/2.jpg'},
    {banners: 'assets/imgs/3.jpg'},
    {banners: 'assets/imgs/4.jpg'}
  ];

  constructor() { }

  
}
