import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import { AngularFirestore } from '@angular/fire/firestore'
import {Router} from '@angular/router'
import { AlertController, NavController } from '@ionic/angular'
import { UserService } from '../../../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss','../auth-style.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password:string = ""
  cpassword:string = ""


  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alert: AlertController,
    public router: Router,
    private navCtrl: NavController
    ) { }

  ngOnInit(){

  }

  goBack(){
    this.navCtrl.back();
  }

  async showAlert(header: string , message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    });
    await alert.present();
  }

  async register() {
    const{username, password, cpassword} = this 
    if(password != cpassword){
      this.showAlert("Error!","Password don't match")
      return console.log("Password don't match")
    }

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codename.com', password)
      
      this. afstore.doc(`users/${res.user.uid}`).set({
        username
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      })
      
      this.showAlert("Success !","Welcome aboard!")
      this.router.navigate(['/tabs'])
      
    }catch(err){
      console.dir(err)
      this.showAlert("Error!",err.message)
    }
  }



}
