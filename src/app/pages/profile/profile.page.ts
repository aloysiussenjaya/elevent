import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { NavController, AlertController } from '@ionic/angular';
import { LoginPage } from '../auth/login/login.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private username = 'null';

  constructor(
    public router: Router,
    private userService:UserService, 
    private navCtrl:NavController, 
    private alertCtrl:AlertController) { }

  ngOnInit() {
    this.username=this.userService.getUsername();
  }

  async myEventsPage(){

    this.router.navigate(['/myevent'])
  }

//   async logout(){
//     const logoutAlert = await this.alertCtrl.create({
//       header:'Logout',
//       message:'Are you sure to log out?',
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel',
//           cssClass: 'secondary',
//           handler: () => {
//           }
//         }, 
//         {
//           text: 'Ok',
//           handler: ()==>{
//             this.navCtrl.navigateRoot("/login")
//           }
          
//         }
//       ]
//     });

//     await logoutAlert.present();

//   }

 }
