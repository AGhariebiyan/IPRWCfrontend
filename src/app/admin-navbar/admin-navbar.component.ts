import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

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
