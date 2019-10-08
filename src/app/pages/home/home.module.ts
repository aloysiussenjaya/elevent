import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';


import { HomePage } from './home.page';
import { from } from 'rxjs';
import { GlobalModule } from '../../module/global/global.module';
import { HomeMenuItemComponent } from '../../components/home-menu-item/home-menu-item.component'

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
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [HomePage, HomeMenuItemComponent]
})
export class HomePageModule {}
