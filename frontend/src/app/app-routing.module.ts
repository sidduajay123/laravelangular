import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { RequestRestComponent } from './components/password/request-rest/request-rest.component';
import { ResponseRestComponent } from './components/password/response-rest/response-rest.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'request-password-reset',
    component:RequestRestComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'response-password-reset',
    component:ResponseRestComponent,
    canActivate: [BeforeLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
