import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet >;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private alertController: AlertController,
    private storage:Storage,
    private navCtrl:NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('initializing app...');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.styleLightContent();
      this.checkLocalStorage();
    });
  }

  async checkLocalStorage(){
    if( await this.storage.get('showSlide') == undefined) {
      console.log("storage : " + this.storage.get('showSlide'));
      this.storage.set('showSlide', false);
    } else {
      console.log('showlide is set, skipping slide intro...');
      this.navCtrl.navigateRoot('/login');
    }
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(999, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url != '/tabs/home') {
          await this.router.navigate(['/tabs/home'] );
        } else if (this.router.url === '/tabs/home') {
          navigator['app'].exitApp();
        } else if (this.router.url === '/login'){
          this.router.navigateByUrl('/login', { skipLocationChange: true });
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }
}
