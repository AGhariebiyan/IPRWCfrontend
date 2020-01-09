import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account-service';
import {Account} from '../../models/account.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    const account = new Account(email, password, null);

    this.accountService.addAccount(account).subscribe();
  }

}
