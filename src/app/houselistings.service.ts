import { Injectable } from '@angular/core';
import { HouseListings } from './houselistings';

@Injectable({
  providedIn: 'root',
})
export class HouselistingsService {
  getHouses(): HouseListings[] {
    return [
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Lagos',
        starRating: '4.5',
        favorite: true,
        price: '450',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Abuja',
        starRating: '4.0',
        favorite: true,
        price: '4500',
      },
      {
        src: '../../assets/images/airbnb.png',
        location: 'Ogun',
        starRating: '3.5',
        favorite: false,
        price: '1750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Ibadan',
        starRating: '3.5',
        favorite: false,
        price: '450',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Osogbo',
        starRating: '3.5',
        favorite: true,
        price: '750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Kaduna',
        starRating: '3.5',
        favorite: false,
        price: '1750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Zamfara',
        starRating: '3.5',
        favorite: false,
        price: '1750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Abakaliki',
        starRating: '3.5',
        favorite: false,
        price: '1750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Imo',
        starRating: '3.5',
        favorite: false,
        price: '1750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Abia',
        starRating: '3.5',
        favorite: false,
        price: '1750',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
        location: 'Jigawa',
        starRating: '4.8',
        favorite: false,
        price: '7750',
      },
    ];
  }
}
