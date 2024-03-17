import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HouseitemComponent } from '../houseitem/houseitem.component';
import { HouseListings } from '../houselistings';
import { HouselistingsService } from '../houselistings.service';
import Swiper from 'swiper';
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
    {icon: "../../assets/images/amazing_views.jpg", text: "Amazing views"},
    {icon: "../../assets/images/surfing.jpg", text: "Surfing"},
    {icon: "../../assets/images/trending.jpg", text: "Trending"},
    {icon: "../../assets/images/new.jpg", text: "New"},
    {icon: "../../assets/images/earth_homes.jpg", text: "Earth homes"},
    {icon: "../../assets/images/farms.jpg", text: "Farms"},
    {icon: "../../assets/images/islands.jpg", text: "Islands"},
    {icon: "../../assets/images/beachfront.jpg", text: "Beachfront"},
    {icon: "../../assets/images/design.jpg", text: "Design"},
    {icon: "../../assets/images/cabins.jpg", text: "Cabins"},
    {icon: "../../assets/images/campers.jpg", text: "Campers"},
    {icon: "../../assets/images/amazing_pools.jpg", text: "Amazing pools"},
    {icon: "../../assets/images/omg.jpg", text: "OMG!"},
    {icon: "../../assets/images/arctic.jpg", text: "Arctic"},
    {icon: "../../assets/images/caves.jpg", text: "Caves"},
    {icon: "../../assets/images/tropical.jpg", text: "Tropical"},
    {icon: "../../assets/images/rooms.jpg", text: "Rooms"},
    {icon: "../../assets/images/lake.jpg", text: "Lakes"},
  ]
  activeViews: string = "all";
  beforeTaxes = false

  constructor(private router: Router, private houses: HouselistingsService) { }
  // houseListings = inject(HouselistingsService);
  // houseListings = this.houseListings?.getHouses()
  houseListings = this.houses.getHouses()

  showElement(event: Event) {
    event.target?.addEventListener('scroll', () => {
      let el = document.getElementById('track');
      let footer = document.getElementById("footer")?.getBoundingClientRect()
      // if (footer)
    
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

  filterViews(view: string) {
    if (view === "all") {
      this.activeViews = "all"
      this.houseListings = this.houses.getHouses()
      return 
    }
    this.activeViews = view
    this.houseListings = this.houses.getHouses().filter(items => items.views.toLowerCase() === view.toLowerCase())
  }

  swipe(nav: string) {
   if (nav === "next") document.querySelectorAll('swiper-container')[1]?.swiper.slideNext()
   if (nav === "prev") document.querySelectorAll('swiper-container')[1]?.swiper.slidePrev()
   

  }

  
}
