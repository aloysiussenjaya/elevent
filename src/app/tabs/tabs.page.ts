import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonTabs, IonRouterOutlet, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs',{static: true}) tabs:IonTabs
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(private router:Router, private platform:Platform) { 
    this.subscribeBackButton();
  }

  ngOnInit() {
    this.tabs.select('home')
  }

  goToBooking(){
    this.router.navigateByUrl("/booking");
  }

  subscribeBackButton(){
    // subscription to native back button
    this.platform.backButton.subscribe(() => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
          if (outlet && outlet.canGoBack()) {
              outlet.pop();
          }
      });
    });
  }
}
