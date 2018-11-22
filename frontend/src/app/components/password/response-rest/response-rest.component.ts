import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-response-rest',
  templateUrl: './response-rest.component.html',
  styleUrls: ['./response-rest.component.css']
})
export class ResponseRestComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation : null,
    resetToken : null
  }
  constructor(
    private route:ActivatedRoute,
    private Jarwis:JarwisService,
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


  handleResponse(data){

  }

  handleError(error){
    
  }

}
