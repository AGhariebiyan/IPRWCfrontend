import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account-service';
import {Account} from '../models/account.model';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';
import {CredentialModel} from '../models/credential.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ingelogd: boolean;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const credentials = new CredentialModel(email, password);

    this.authService.login(credentials);

    // if (this.authService.checkCredentials(credentials).subscribe(data => this.account = data);) {
    //   this.ingelogd = true;
    //   this.route.navigateByUrl('products');
    // } else {
    //   console.log('FOUT GEGAAN!!!');
    // }
  }

  navigateToRegister() {
    this.route.navigateByUrl('register');
  }

}
