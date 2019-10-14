import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyEventDetailsPage } from './my-event-details.page';

import { TicketsComponent } from '../../components/tickets/tickets.component';
const routes: Routes = [
  {
    path: '',
    component: MyEventDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyEventDetailsPage, TicketsComponent]
})
export class MyEventDetailsPageModule {}
