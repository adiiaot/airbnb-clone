import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouselistingsService } from '../houselistings.service';
import { HouseListings } from '../houselistings';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  room!: any
  constructor(private route: ActivatedRoute, private houses: HouselistingsService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    if ((typeof id === "string")) {
      this.room = this.houses.getHouses()[parseInt(id)]
    } else {
      this.room = ""
    }
    // alert(JSON.stringify(this.room))
  }
  // alert(this.room)
}
