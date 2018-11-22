import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-rest',
  templateUrl: './request-rest.component.html',
  styleUrls: ['./request-rest.component.css']
})
export class RequestRestComponent implements OnInit {

  public form = {
    email : null,
  };

  constructor(
    private Jarwis:JarwisService,
    private notify:SnotifyService,
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );

  }

  handleResponse(res){
    console.log(res);
    this.form.email = null;
  }

}
