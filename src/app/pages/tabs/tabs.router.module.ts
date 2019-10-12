import { RouterModule , Routes } from '@angular/router';
import { NgModule } from '@angular/core';
  
import { TabsPage } from './tabs.page';

const routes : Routes = [
    {
        path: '', //default
        component: TabsPage, // localhost/tabs/profile
        children : [
            { path: 'home', loadChildren: 'src/app/pages/home/home.module#HomePageModule' },
            { path: 'profile', loadChildren: 'src/app/pages/profile/profile.module#ProfilePageModule' },
        ]
    }
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }