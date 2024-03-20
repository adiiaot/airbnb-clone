import { Injectable } from '@angular/core';
import { HouseListings } from './houselistings'; 


@Injectable({
  providedIn: 'root',
})
export class HouselistingsService {
  getHouses(): HouseListings[] {
    return [
      {
photos: ['../assets/images/az1.jpg', '../assets/images/az2.jfif','../assets/images/az3.jfif','../assets/images/az4.jfif','../assets/images/az5.jfif',] ,
        location: 'Adomi, Ghana',
        starRating: '4.82',
        favorite: true,
        priceAfterTax: '116',
        priceBeforeTax: '100',
        views: 'Amazing Views',
        houseId: "1"
      },
      {
        photos: ['../assets/images/surf1.jfif', '../assets/images/surf2.jfif','../assets/images/surf3.jpg','../assets/images/surf4.jfif','../assets/images/surf5.jfif',] ,
        location: 'Beja, Portugal',
        starRating: '5.0',
        favorite: true,
        priceAfterTax: '1,568',
        priceBeforeTax: '1,450',
        views: 'Surfing',
        houseId: "2"
      },
      {
        photos: ['../assets/images/trend1.jfif', '../assets/images/trend2.jfif','../assets/images/trend3.jfif','../assets/images/trend4.jfif','../assets/images/trend5.jfif',] ,
        location: 'Savusavu, Fiji',
        starRating: '4.88',
        favorite: false,
        priceAfterTax: '282',
        priceBeforeTax: '252',
        views: 'Trending',
        houseId: "3"
      },
      {
        photos: ['../assets/images/new1.jfif', '../assets/images/new2.jfif','../assets/images/new3.jfif','../assets/images/new4.jfif','../assets/images/new5.jfif',] ,
        location: 'Ibiza, Spain',
        starRating: '4.94',
        favorite: false,
        priceAfterTax: '114',
        priceBeforeTax: '110',
        views: 'New',
        houseId: "4"
      },
      {
        photos: ['../assets/images/earth1.jfif', '../assets/images/earth2.jfif','../assets/images/earth3.jfif','../assets/images/earth4.jfif','../assets/images/earth5.jfif',] ,
        location: 'Fethiye, Turkey',
        starRating: '4.5',
        favorite: true,
        priceAfterTax: '271',
        priceBeforeTax: '252',
        views: 'Earth Homes',
        houseId: "5"
      },

      {
        photos: ['../assets/images/farm1.jfif', '../assets/images/farm2.jfif','../assets/images/farm3.jfif','../assets/images/farm4.jfif','../assets/images/farm5.jfif',] ,
        location: 'Euboea, Greece',
        starRating: '4.0',
        favorite: true,
        priceAfterTax: '452',
        priceBeforeTax: '445',
        views: 'Farms',
        houseId: "7"
      },
      {
        photos: ['../assets/images/island2.jfif', '../assets/images/island1.jfif','../assets/images/island3.jfif','../assets/images/island4.jfif','../assets/images/island5.jfif',] ,
        location: 'Taghazout, Morocco',
        starRating: '4.93',
        favorite: false,
        priceAfterTax: '141',
        priceBeforeTax: '111',
        views: 'Islands',
        houseId: "8"
      },
      {
        photos: ['../assets/images/beach1.jfif', '../assets/images/beach2.jfif','../assets/images/beach3.jfif','../assets/images/beach4.jfif','../assets/images/beach5.jfif',] ,
        location: 'La Costa, Spain',
        starRating: '2.87',
        favorite: true,
        priceAfterTax: '263',
        priceBeforeTax: '255',
        views: 'Beachfront',
        houseId: "9"
      },
      {
        photos: ['../assets/images/design1.jfif', '../assets/images/design2.jfif','../assets/images/design3.jfif','../assets/images/design4.jfif','../assets/images/design5.jfif',] ,
        location: 'Adeje, Spain',
        starRating: '5.0',
        favorite: true,
        priceAfterTax: '1,126',
        priceBeforeTax: '1,095',
        views: 'Design',
        houseId: "10"
      },
      {
        photos: ['../assets/images/cabin1.jfif', '../assets/images/cabin2.jfif','../assets/images/cabin3.jfif','../assets/images/cabin4.jfif','../assets/images/cabin5.jfif',] ,
        location: ' El Sauzal, Spain',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '126',
        priceBeforeTax: '100',
        views: 'Cabins',
        houseId: "11"
      },
      {
        photos: ['../assets/images/camp1.jfif', '../assets/images/camp2.jfif','../assets/images/camp3.jfif','../assets/images/camp4.jfif','../assets/images/camp5.jfif',] ,
        location: 'Rio Marina, Italy',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '247',
        priceBeforeTax: '240',
        views: 'Campers',
        houseId: "12"
      },
      {
        photos: ['../assets/images/pool1.jfif', '../assets/images/pool2.jfif','../assets/images/pool3.jfif','../assets/images/pool4.jfif','../assets/images/pool5.jfif',] ,
        location: 'Agios Pavlos, Greece',
        starRating: '4.97',
        favorite: true,
        priceAfterTax: '381',
        priceBeforeTax: '352',
        views: 'Amazing Pools',
        houseId: "13"
      },
      {
        photos: ['../assets/images/alien1.jfif', '../assets/images/alien2.jfif','../assets/images/alien3.jfif','../assets/images/alien4.jfif','../assets/images/alien5.jfif',] ,
        location: 'Mertola, Portugal',
        starRating: '4.97',
        favorite: true,
        priceAfterTax: '1,250',
        priceBeforeTax: '1,100',
        views: 'OMG!',
        houseId: "15"
      },
      {
        photos: ['../assets/images/arctic1.jfif', '../assets/images/arctic2.jfif','../assets/images/arctic3.jfif','../assets/images/arctic4.jfif','../assets/images/arctic5.jfif',] ,
        location: 'Jinja, Uganda',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '475',
        priceBeforeTax: '420',
        views: 'Arctic',
        houseId: "16"
      },
      {
        photos: ['../assets/images/cave1.jfif', '../assets/images/cave2.jfif','../assets/images/cave3.jfif','../assets/images/cave4.jfif','../assets/images/cave5.jfif',] ,
        location: 'Otok Prisnjak, Croatia',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '1,126',
        priceBeforeTax: '1,100',
        views: 'Caves',
        houseId: "17"
      },
      {
        photos: ['../assets/images/tropic1.jfif', '../assets/images/tropic2.jfif','../assets/images/tropic3.jfif','../assets/images/tropic4.jfif','../assets/images/tropic5.jfif',] ,
        location: 'Murter, Croatia',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '570',
        priceBeforeTax: '520',
        views: 'Tropical',
        houseId: "18"
      },
      {
        photos: ['../assets/images/room1.jfif', '../assets/images/room2.jfif','../assets/images/room3.jfif','../assets/images/room4.jfif','../assets/images/room5.jfif',] ,
        location: 'Vis, Croatia',
        starRating: '4.97',
        favorite: true,
        priceAfterTax: '2,580',
        priceBeforeTax: '2,514',
        views: 'Rooms',
        houseId: "19"
      },
      {
        photos: ['../assets/images/lake1.jfif', '../assets/images/lake2.jfif','../assets/images/lake3.jfif','../assets/images/lake4.jfif','../assets/images/lake5.jfif',] ,
        location: 'Ytteran, Sweden',
        starRating: '4.97',
        favorite: false,
        priceAfterTax: '789',
        priceBeforeTax: '750',
        views: 'Lakes',
        houseId: "20"
      },
    ];
  }
}
