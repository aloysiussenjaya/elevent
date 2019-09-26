import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private username = 'null';

  constructor(private userService:UserService, private navCtrl:NavController) { }

  ngOnInit() {
    // this.username=this.userService.getUsername();

  }

  logout(){
    this.navCtrl.navigateRoot("/login");  
  }

}
