import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



/** This part for page file address
 *  every page address should be here
 */
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pserverofile', loadChildren: './profile/profile.module#ProfilePageModule' }
  
];

// localhost/tabs

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
