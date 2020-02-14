import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean;
  accountType: string;

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getValueEmail().subscribe((value) => {
      this.userName = value;
    });
    this.authService.getValueIsLoggedIn().subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.authService.getValueAccountType().subscribe((value) => {
      this.accountType = value;
    });
  }

  logout() {
    this.authService.logout();
}

}
