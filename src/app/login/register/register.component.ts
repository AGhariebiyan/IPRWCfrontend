import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account-service';
import {Account} from '../../models/account.model';
import {Router} from '@angular/router';
import {equal} from 'assert';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  correctPassword: boolean;
  registerForm: FormGroup;

  constructor(private accountService: AccountService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      Repeatedpassword: ['', [Validators.required]]
    });
    // this.registerForm = new FormGroup({
    //   'email': new FormControl(null, Validators.required),
    //   'password': new FormControl(null, Validators.required)
    // });
  }

  onSubmit() {
    const email = this.registerForm.value.email.toLowerCase();
    const password = this.registerForm.value.password;
    const repeatedpassword = this.registerForm.value.Repeatedpassword;

    if (password === repeatedpassword){
      const account = new Account(email, password, null);

      this.accountService.addAccount(account).subscribe();

      this.route.navigateByUrl('login');
      this.correctPassword = true;
    } else {
      this.correctPassword = false;
    }

  }

}
