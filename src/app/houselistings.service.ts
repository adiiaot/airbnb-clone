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
        priceAfterTax: '116',
        priceBeforeTax: '100',
        views: 'amazing views'
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Ogun',
        starRating: '5.0',
        favorite: true,
        priceAfterTax: '1,568',
        priceBeforeTax: '1,450',
        views: 'surfing'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Awka',
        starRating: '4.88',
        favorite: false,
        priceAfterTax: '282',
        priceBeforeTax: '252',
        views: 'trending'
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Lafenwa',
        starRating: '4.94',
        favorite: false,
        priceAfterTax: '114',
        priceBeforeTax: '110',
        views: 'new'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Jigawa',
        starRating: '4.5',
        favorite: true,
        priceAfterTax: '271',
        priceBeforeTax: '252',
        views: 'Earth homes'
      },

      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif','../assets/images/house1.jfif' ] ,
        location: 'Taraba',
        starRating: '4.0',
        favorite: true,
        priceAfterTax: '452',
        priceBeforeTax: '445',
        views: 'farms'
      },
      {
        photos: ['../assets/images/house8.jfif', '../assets/images/house7.jfif','../assets/images/house6.jfif','../assets/images/house5.jfif','../assets/images/house4.jfif','../assets/images/house3.jfif','../assets/images/house2.jfif','../assets/images/house1.jfif' ] ,
        location: 'Osun',
        starRating: '4.93',
        favorite: false,
        priceAfterTax: '141',
        priceBeforeTax: '111',
        views: 'islands'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house5.jfif','../assets/images/house2.jfif','../assets/images/house6.jfif','../assets/images/house3.jfif','../assets/images/house7.jfif','../assets/images/house4.jfif','../assets/images/house8.jfif' ] ,
        location: 'Ibadan',
        starRating: '2.87',
        favorite: true,
        priceAfterTax: '263',
        priceBeforeTax: '255',
        views: 'beachfront'
      },
      {
        photos: ['../assets/images/house2.jfif', '../assets/images/house4.jfif','../assets/images/house6.jfif','../assets/images/house8.jfif','../assets/images/house1.jfif','../assets/images/house3.jfif','../assets/images/house5.jfif','../assets/images/house7.jfif' ] ,
        location: 'Yobe',
        starRating: '5.0',
        favorite: true,
        priceAfterTax: '1,126',
        priceBeforeTax: '1,095',
        views: 'design'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '126',
        priceBeforeTax: '100',
        views: 'cabins'
      },



      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '247',
        priceBeforeTax: '240',
        views: 'campers'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '381',
        priceBeforeTax: '352',
        views: 'amazing pools'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '1,250',
        priceBeforeTax: '1,100',
        views: 'omg'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '475',
        priceBeforeTax: '420',
        views: 'arctic'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '1,126',
        priceBeforeTax: '1,100',
        views: 'caves'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '570',
        priceBeforeTax: '520',
        views: 'tropical'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '2,580',
        priceBeforeTax: '2,514',
        views: 'rooms'
      },
      {
        photos: ['../assets/images/house1.jfif', '../assets/images/house2.jfif','../assets/images/house3.jfif','../assets/images/house4.jfif','../assets/images/house5.jfif','../assets/images/house8.jfif','../assets/images/house7.jfif','../assets/images/house6.jfif' ] ,
        location: 'Damaturu',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '789',
        priceBeforeTax: '750',
        views: 'lakes'
      },
    ];
  }
}
