import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.room = this.route.snapshot.paramMap.get("room");
    localStorage.setItem("room", this.room)
    console.log(this.room);
  }

}
