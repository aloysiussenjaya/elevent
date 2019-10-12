import { Component, OnInit, forwardRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private storage:Storage,
    private navCtrl:NavController
  ) { 

  }

  ngOnInit() {
    this.checkLocalStorage();
  }

  async checkLocalStorage(){
    if( await this.storage.get('showSlide') == undefined) {
      console.log("storage : " + this.storage.get('showSlide'));
      this.storage.set('showSlide', false);
      setTimeout(()=>{
        this.navCtrl.navigateRoot('/intro-slide',{
          animated:true,
          animationDirection: 'forward'
        });
      },1500);
    } else {
      console.log('showlide is set, skipping slide intro...');
      setTimeout(()=>{
        this.navCtrl.navigateRoot('/login',{
          animated: true,
          animationDirection: 'forward' 
        });
      },1500);
    }
  }

}
