import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  accountType = " ";

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
    this.accountType = this.authService.getCurrentAccountType();
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
