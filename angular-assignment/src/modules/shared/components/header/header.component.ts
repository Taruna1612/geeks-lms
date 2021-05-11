import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public profile;
  public view ;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isUserAuthenticated()){
      this.view = true;
      this.authService.getUserProfile().
      subscribe(
        data => {
          console.log(data);
          this.profile = data;
          this.profile = this.profile.filter(item => (item.name == "Taruna Sharma"))[0];
          console.log(this.profile);
        }
      );
    }   
  }

  onLogout(){
    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }
}