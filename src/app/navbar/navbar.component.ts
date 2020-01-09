import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToContact() {
    this.route.navigateByUrl('contact');
  }

  navigateToAboutUs() {
    this.route.navigateByUrl('about-us');
  }

  navigateToLogIn() {
    this.route.navigateByUrl('login');
  }

}
