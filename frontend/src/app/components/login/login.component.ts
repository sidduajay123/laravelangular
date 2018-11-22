import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error = null;
  public form={
    email:null,
    password:null
  };
  constructor(
    private Jarwis:JarwisService,
    private Token:TokenService,
    private router:Router,
    private Auth:AuthService,
    ) { }

  onSubmit(){
   this.Jarwis.login(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changedAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}
