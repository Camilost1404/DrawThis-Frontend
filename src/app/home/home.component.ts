import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameRoom: string = "";

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem("room");
  }

  enterRoom = (nameRoom: any) => {
    RouterModule.forRoot(nameRoom);
  }

}
