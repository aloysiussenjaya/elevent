import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { NavExtrasService } from '../../services/NavExtrasServices';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  data = {
    title: "",

  };

  constructor(private navCtrl:NavController, private navExtras:NavExtrasService) { 
    this.data.title = navExtras.getExtras().title;
  }

  ngOnInit() {
  }

}
