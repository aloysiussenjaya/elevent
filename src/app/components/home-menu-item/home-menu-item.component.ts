import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-menu-item',
  templateUrl: './home-menu-item.component.html',
  styleUrls: ['./home-menu-item.component.scss'],
})
export class HomeMenuItemComponent implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {}

  openMyEvent(){
    this.navCtrl.navigateForward(['/myevent']);
  }

}
