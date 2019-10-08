import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventListPage } from './event-list.page';

import { GlobalModule } from '../../module/global/global.module';

const routes: Routes = [
  {
    path: '',
    component: EventListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [EventListPage]
})
export class EventListPageModule {}
