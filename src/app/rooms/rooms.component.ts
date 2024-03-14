import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  id!: any
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  //  alert(this.id)
   alert(this.route.snapshot.paramMap.get("id"))
  }
}
