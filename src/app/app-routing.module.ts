import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



/** This part for page file address
 *  every page address should be here
 */
const routes: Routes = [
  { path: '', redirectTo: 'splash-screen', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'pserverofile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'publish-form', loadChildren: './pages/publish-form/publish-form.module#PublishFormPageModule' },
  { path: 'intro-slide', loadChildren: './pages/intro-slide/intro-slide.module#IntroSlidePageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'event-list', loadChildren: './pages/event-list/event-list.module#EventListPageModule' },
  { path: 'event-detail', loadChildren: './pages/event-detail/event-detail.module#EventDetailPageModule' },
  { path: 'splash-screen', loadChildren: './pages/splash-screen/splash-screen.module#SplashScreenPageModule' }
];

// localhost/tabs

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
