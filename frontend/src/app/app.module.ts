import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RequestRestComponent } from './components/password/request-rest/request-rest.component';
import { ResponseRestComponent } from './components/password/response-rest/response-rest.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestRestComponent,
    ResponseRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
