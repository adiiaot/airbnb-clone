import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HouseitemComponent } from '../houseitem/houseitem.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HouseitemComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {
  showBottomNav = true;
  top = 0;
  hideMore = true;
  location: 'stays' | 'experiences' | 'online experiences' = 'stays';
  _scrollnext = "9"
  _scrollprev = "0"
  items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  next = true
  prev = false
  totalprice = false
  al(event: Event, param: string) {
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

  scrollnext() {
    // alert("p")
    let items = document.getElementById(this._scrollnext)
    if (!items) return
    items.scrollIntoView({behavior: 'smooth'})
    let tmp = parseInt(this._scrollnext) + 9
    this._scrollprev = this._scrollnext
    this._scrollnext = tmp.toString()
   
    // if (parseInt(this._scrollnext) >= this.items.length) this.next = false
  }
  scrollprev() {
    let items = document.getElementById(this._scrollprev)
    if (!items) return
    items.scrollIntoView({behavior: 'smooth'})
    let tmp = parseInt(this._scrollprev) + 9
    this._scrollnext = tmp.toString()
    this._scrollnext = (parseInt(this._scrollprev) - 9).toString()
    // if (parseInt(this._scrollnext) >= this.items.length) this.next = false
  }
}
