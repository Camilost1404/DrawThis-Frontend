import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameRoom: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  enterRoom = (nameRoom: any) => {
    RouterModule.forRoot(nameRoom);
  }

}
