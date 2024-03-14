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

  @Input() houseId!: number ;
  @Output() housedetails = new EventEmitter<number> ();

  showmore(id: number) {
   this.housedetails.emit(this.houseId)
  }

}
