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
  secHeader = false

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    // alert(typeof id)
    if (typeof id === 'string') {
      this.room = this.houses.getHouses().filter(house => house.houseId === id )[0];
    } else {
      this.room = '';
    }
  }

  back() {
    this.router.navigateByUrl("/home")
  }

 reveal(e: Event) {
  let pos = document.getElementById("room")
  if (pos?.scrollTop && (pos.scrollTop >= 450)) {
    this.secHeader = true
  } else {
    this.secHeader = false
  }
 }

 _parseInt(str: string) {
  return parseInt(str)
 }
 
}
