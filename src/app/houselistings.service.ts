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
        views: 'amazing views'
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Ogun',
        starRating: '5.0',
        favorite: true,
        price: '1,568',
        views: 'surfing'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Awka',
        starRating: '4.88',
        favorite: false,
        price: '282',
        views: 'trending'
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Lafenwa',
        starRating: '4.94',
        favorite: false,
        price: '114',
        views: 'new'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Jigawa',
        starRating: '4.5',
        favorite: true,
        price: '271',
        views: 'Earth homes'
      },

      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif' ] ,
        location: 'Taraba',
        starRating: '4.0',
        favorite: true,
        price: '452',
        views: 'farms'
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Osun',
        starRating: '4.93',
        favorite: false,
        price: '141',
        views: 'islands'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Ibadan',
        starRating: '2.87',
        favorite: true,
        price: '263',
        views: 'beachfront'
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Yobe',
        starRating: '5.0',
        favorite: true,
        price: '1,126',
        views: 'design'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'cabins'
      },



      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'campers'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'amazing pools'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'omg'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'arctic'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'caves'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'tropical'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'rooms'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        price: '126',
        views: 'lakes'
      },
    ];
  }
}
