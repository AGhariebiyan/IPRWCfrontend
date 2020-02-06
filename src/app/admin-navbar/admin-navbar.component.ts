import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  userName = "";

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.userName);
    this.userName = this.authService.userName;
  }

  logout() {
    this.authService.logout();
}

}
