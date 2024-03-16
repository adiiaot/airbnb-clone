import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HouseitemComponent } from '../houseitem/houseitem.component';
import { HouseListings } from '../houselistings';
import { HouselistingsService } from '../houselistings.service';
// import logo from '../../assets/images/airbnb.png'



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HouseitemComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {


  @Output() house = new EventEmitter<HouseListings> ();


  showBottomNav = true;
  top = 0;
  hideMore = true;
  location: 'stays' | 'experiences' | 'online experiences' = 'stays';
  views = [
    {icon: "", text: "Amazing views"},
    {icon: "", text: "Surfing"},
    {icon: "", text: "Trending"},
    {icon: "", text: "New"},
    {icon: "", text: "Earth homes"},
    {icon: "", text: "Farms"},
    {icon: "", text: "Islands"},
    {icon: "", text: "Beachfront"},
    {icon: "", text: "Design"},
    {icon: "", text: "Cabins"},
    {icon: "", text: "Campers"},
    {icon: "", text: "Amazing pools"},
    {icon: "", text: "OMG!"},
    {icon: "", text: "Arctic"},
    {icon: "", text: "Caves"},
    {icon: "", text: "Tropical"},
    {icon: "", text: "Rooms"},
    {icon: "", text: "Lakes"},
  ]
  totalprice = false

  constructor(private router: Router, private houses: HouselistingsService) { }
  // houseListings = inject(HouselistingsService);
  // houseListings = this.houseListings?.getHouses()
  houseListings = this.houses.getHouses()

  showElement(event: Event) {
    event.target?.addEventListener('scroll', () => {
      let el = document.getElementById('track');
      if (!el) return;

      let top = el.getBoundingClientRect().top;
      if (top === 0) this.hideMore = true;
      if (top === this.top) return;

      if (top < 0) {
        this.showBottomNav = false;
        this.hideMore = false;
      }
      if (top > this.top) {
        this.showBottomNav = true;
        this.hideMore = false;
      }
      if (top !== this.top) this.top = top;
    });
  }

  roomNavigate(roomId: number) {
    this.router.navigateByUrl(`/rooms/${roomId}`)
  }
}
