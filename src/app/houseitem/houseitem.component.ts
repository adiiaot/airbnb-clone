import { Component, EventEmitter, Input, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HouseListings } from '../houselistings';
import { HouselistingsService } from '../houselistings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-houseitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './houseitem.component.html',
  styleUrl: './houseitem.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HouseitemComponent {

  @Input() house!: HouseListings ;
  @Input() houseId!: number;
  @Input() beforeTaxes!: boolean;
  @Output() housedetails = new EventEmitter<number> ();

  constructor(private houses: HouselistingsService) {}

  houseListings = this.houses.getHouses()

  showmore(id: number) {
   this.housedetails.emit(this.houseId)
  }

  swipe(nav: string) {
    // if (nav === "prev") document.querySelectorAll("swiper-container")[3]?.swiper.slidePrev()
    // if (nav === "next") document.querySelectorAll("swiper-container")[3]?.swiper.slideNext()

    if (nav === "next") {
      document.querySelectorAll("swiper-container").forEach(el => {
        el.swiper.slideNext()
      })
    }

 
  }

}

