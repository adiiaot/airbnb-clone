import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HouseListings } from '../houselistings';

@Component({
  selector: 'app-houseitem',
  standalone: true,
  imports: [],
  templateUrl: './houseitem.component.html',
  styleUrl: './houseitem.component.css'
})
export class HouseitemComponent {

  @Input() house!: HouseListings ;
  @Output() housedetails = new EventEmitter<HouseListings> ();

  showmore(details: HouseListings) {
   this.housedetails.emit(this.house)
  }

}
