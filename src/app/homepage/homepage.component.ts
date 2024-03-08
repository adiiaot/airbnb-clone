import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  showBottomNav = true;
  top = 0;
  hideMore = true;
  location: "stays" | "experiences" | "online experiences" = "stays"
  al(event: Event, param: string) {
    event.target?.addEventListener('scroll', () => {
      let el = document.getElementById('track');
      if (!el) return;
      
      let top = el.getBoundingClientRect().top;
      if (top === 0) this.hideMore = true;
      if (top === this.top) return
     
      if (top < 0) {
        this.showBottomNav = false
        this.hideMore = false
      }
      if (top > this.top) {
        this.showBottomNav = true
        this.hideMore = false
      } 

      if (top !== this.top) this.top = top
     
    });
  }
}
