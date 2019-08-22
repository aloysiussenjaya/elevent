import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import {AlertController} from '@ionic/angular'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
  
  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public userService: UserService,
    public router: Router
    ) { } 

  ngOnInit() {
  }
// login for make sure with email template example : asdasd + @gmail.com
  async login(){
    const {username,password} = this
    var loginUsername = '';

    //Solve login issue, so user can log in either with username or email.
    //Will be changed if the email is not single (codename.com);
    if(username.includes('@')){
      var emailCharPos = username.indexOf('@');
      loginUsername = username.substring(0,emailCharPos);
    }else{
      loginUsername = username;
    }

    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(loginUsername + '@codename.com',password)

      if(res.user){
          this.userService.setUser({
            username,
            uid: res.user.uid
          })
          this.router.navigate(['/tabs'])
      }

    }catch(err){
      console.dir(err)
      this.showAlert("Error!",err.message)
    }
  }

  async showAlert(header: string , message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Try Again"]
    });
    await alert.present();
  }

}
