import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



/** This part for page file address
 *  every page address should be here
 */
const routes: Routes = [
  { path: '', redirectTo: 'splash-screen', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'publish-form', loadChildren: './pages/publish-form/publish-form.module#PublishFormPageModule' },
  { path: 'intro-slide', loadChildren: './pages/intro-slide/intro-slide.module#IntroSlidePageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'event-list', loadChildren: './pages/event-list/event-list.module#EventListPageModule' },
  { path: 'event-detail', loadChildren: './pages/event-detail/event-detail.module#EventDetailPageModule' },
  { path: 'splash-screen', loadChildren: './pages/splash-screen/splash-screen.module#SplashScreenPageModule' },
  { path: 'my-event-details', loadChildren: './pages/my-event-details/my-event-details.module#MyEventDetailsPageModule' },
  { path: 'my-event-details/:id', loadChildren: './pages/my-event-details/my-event-details.module#MyEventDetailsPageModule' },
  { path: 'myevent', loadChildren: './pages/myevent/myevent.module#MyeventPageModule' }

];

// localhost/tabs

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
