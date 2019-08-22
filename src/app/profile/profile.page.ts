import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private username = 'null';

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.username=this.userService.getUsername();

  }

  logout(){
    //TODO: CREATE LOGOUT HERE.
  }

}
