import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouselistingsService } from '../houselistings.service';
import { HouseListings } from '../houselistings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoomsComponent implements OnInit {
  

  constructor(
    private route: ActivatedRoute,
    private houses: HouselistingsService,
    private router: Router
  ) {}

  room!: any;
  showMore = false

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (typeof id === 'string') {
      this.room = this.houses.getHouses()[parseInt(id)];
    } else {
      this.room = '';
    }
  }

  back() {
    this.router.navigateByUrl("/home")
  }

  // getPos(e: Event) {
  //   const {clientX, clientY} = e.
  // }
}
