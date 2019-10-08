import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EventCardComponent } from '../../components/event-card/event-card.component';

@NgModule({
  declarations: [EventCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EventCardComponent
  ]
})
export class GlobalModule { }
