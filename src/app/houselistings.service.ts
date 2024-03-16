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
        starRating: '4.82',
        favorite: true,
        price: '116',
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Ogun',
        starRating: '5.0',
        favorite: true,
        price: '1,568',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Awka',
        starRating: '4.88',
        favorite: false,
        price: '282',
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Lafenwa',
        starRating: '4.94',
        favorite: false,
        price: '114',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Jigawa',
        starRating: '4.5',
        favorite: true,
        price: '271',
      },

      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif' ] ,
        location: 'Taraba',
        starRating: '4.0',
        favorite: true,
        price: '452',
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Osun',
        starRating: '4.93',
        favorite: false,
        price: '141',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Ibadan',
        starRating: '2.87',
        favorite: true,
        price: '263',
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Yobe',
        starRating: '5.0',
        favorite: true,
        price: '1,126',
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
      },
    ];
  }
}
