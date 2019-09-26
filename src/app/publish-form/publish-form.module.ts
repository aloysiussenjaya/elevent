import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublishFormPage } from './publish-form.page';

import { TicketsComponent } from '../components/tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: PublishFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublishFormPage, TicketsComponent]
})
export class PublishFormPageModule {}
