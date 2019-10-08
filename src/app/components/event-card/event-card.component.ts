import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { NavExtrasService } from '../../services/NavExtrasServices';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() data;

  constructor(private navExtras:NavExtrasService, private navCtrl:NavController) { }

  ngOnInit() {
    
  }

  goToDetail(){
    this.navCtrl.navigateForward(['event-detail']);
    this.navExtras.setExtras(this.data);
  }

}
