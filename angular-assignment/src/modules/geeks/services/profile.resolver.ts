import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/modules/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {
  profile: any;

  constructor(private authService: AuthService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{
    return this.authService.getUserProfile().toPromise().then((response) => {
      console.log(response);
      this.profile = response;
      this.profile = this.profile.filter(item => (item.name == "Taruna Sharma"));
      console.log(this.profile);
      route.data = this.profile;
      return this.profile;
  });
  }
}
