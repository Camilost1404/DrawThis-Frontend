import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameRoom: string = "";

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.delete("room")
  }

  enterRoom = (nameRoom: any) => {
    RouterModule.forRoot(nameRoom);
  }

}
