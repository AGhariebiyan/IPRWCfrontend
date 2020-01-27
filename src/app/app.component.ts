import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webshopFrontend';

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  checkAccountType() {
    const accountType = this.authService.getCurrentAccountType();
    return accountType;
  }
}
