import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs',{static: true}) tabs:IonTabs

  constructor(private router:Router) { }

  ngOnInit() {
    this.tabs.select('home')
  }

  goToBooking(){
    this.router.navigateByUrl("/booking");
  }

}
