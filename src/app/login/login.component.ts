import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';
import {CredentialModel} from '../models/credential.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ingelogd: boolean;
  loginForm: FormGroup;
  user: User;

  constructor(private authService: AuthService, private route: Router, public jwtHelper: JwtHelperService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // this.loginForm = new FormGroup({
    //   'email': new FormControl(null, Validators.required),
    //   'password': new FormControl(null, Validators.required),
    // });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const credentials = new CredentialModel(email, password);

    if (this.authService.login(credentials)) {
      this.ingelogd = true;
      console.log("ingelogd");
      this.route.navigateByUrl("products");
    } else {
      this.ingelogd = false;
      console.log("fout");
    }
  }

  refresh(): void {
    window.location.reload();
  }

  navigateToRegister() {
    this.route.navigateByUrl('register');
  }

}
