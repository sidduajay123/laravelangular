import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { TokenService } from './token.service';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    //throw new Error("Method not implemented.");
    return this.Token.loggedIn();
  }

  constructor(private Token:TokenService) { }
}
