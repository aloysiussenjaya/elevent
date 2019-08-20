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
    public user: UserService,
    public router: Router
    ) { } 

  ngOnInit() {
  }
// login for make sure with email template example : asdasd + @gmail.com
  async Login(){
    const {username,password} = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com',password)

      if(res.user){
          this.user.setUser({
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
