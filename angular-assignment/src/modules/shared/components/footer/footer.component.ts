import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public view: boolean = true;
  public activate;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(() =>{
      if(this.router.url.endsWith('/login') || this.router.url.endsWith('/signup')){
        this.view = false;
      }
      else if(this.router.url.endsWith('/dashboard')){
        this.view = true;
      }
    })
 
};
  
}


