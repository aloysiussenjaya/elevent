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
  selectedTab="home";

  constructor(private router:Router, private platform:Platform) { 
    // this.subscribeBackButton();
  }

  ngOnInit() {
    this.tabs.select('home')
  }

  changeTab(target){
    if(this.tabs.getSelected() != target){
      this.tabs.select(target);
      this.selectedTab = target;
    }

  }

  goToPublishForm(){
    this.router.navigateByUrl("/publish-form");
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
