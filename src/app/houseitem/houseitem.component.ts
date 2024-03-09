import { Component, Input } from '@angular/core';
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

}
