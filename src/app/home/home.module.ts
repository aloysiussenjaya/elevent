import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';


import { HomePage } from './home.page';
import { from } from 'rxjs';

import { EventCardComponent } from '../components/event-card/event-card.component'
import { HomeMenuItemComponent } from '../components/home-menu-item/home-menu-item.component'

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, EventCardComponent, HomeMenuItemComponent]
})
export class HomePageModule {}
