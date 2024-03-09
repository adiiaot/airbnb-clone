import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  houseListings = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
      location: 'Lagos',
      starRating: '4.5',
      favorite: true,
      price: "450"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
      location: 'Abuja',
      starRating: '4.0',
      price: "4500"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
      location: 'POgun',
      starRating: '3.5',
      favorite: false,
      price: "1750"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
      location: 'Ibadan',
      starRating: '3.5',
      favorite: false,
      price: "450"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv6CyqS-g3kJDKjhit7sQ-Us0somkda0X5w&usqp=CAU',
      location: 'Osogbo',
      starRating: '3.5',
      favorite: true,
      price: "750"
    },
  ]

}
