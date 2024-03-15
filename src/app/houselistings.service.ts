import { Injectable } from '@angular/core';
import { HouseListings } from './houselistings';
// import house1 from '../assets/images/house1.jfif';

@Injectable({
  providedIn: 'root',
})
export class HouselistingsService {
  getHouses(): HouseListings[] {
    return [
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house6.jfif','../assets/images/house7.jfif','../assets/images/house8.jfif' ] ,
        location: 'Lagos',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Ogun',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Awka',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Lafenwa',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Jigawa',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },

      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif' ] ,
        location: 'Taraba',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Osun',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Ibadan',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Yobe',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
    ];
  }
}
