import { Component, EventEmitter, Input, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HouseListings } from '../houselistings';
import { HouselistingsService } from '../houselistings.service';

@Component({
  selector: 'app-houseitem',
  standalone: true,
  imports: [],
  templateUrl: './houseitem.component.html',
  styleUrl: './houseitem.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HouseitemComponent {

  @Input() house!: HouseListings ;
  @Input() houseId!: number
  @Output() housedetails = new EventEmitter<number> ();

  constructor(private houses: HouselistingsService) {}

  houseListings = this.houses.getHouses()

  showmore(id: number) {
   this.housedetails.emit(this.houseId)
  }

}
