import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit{
  
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private titleService: Title
  ){}

  ngOnInit() {
    
  }
}
