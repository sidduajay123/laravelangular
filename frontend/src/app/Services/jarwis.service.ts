import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:81/wae/backend/api';

  constructor(private http:HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`,data)
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`,data);
  }

  changePassword(data){
    return this.http.post(`${this.baseUrl}/resetPassword`,data);
  }
}
