import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {Observable} from 'rxjs';
import {CredentialModel} from '../models/credential.model';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private http: HttpService, private router: Router, public jwtHelper: JwtHelperService) {}

  login(credentials: CredentialModel) {
    if (credentials.email !== '' && credentials.password !== '') {
      this.makePostRequest(credentials)
        .subscribe(data => {
          this.user = data as User;
          localStorage.setItem('jwttoken', this.user.jwttoken); }
      );
      // if (this.user.accountType === 'ADMIN') {
      //       //   this.router.navigateByUrl('admin/products');
      //       // } else {
      //       //   this.router.navigateByUrl('products');
      //       // }
      //     // } else {
      //     //   return false;
      return true;
    } else {
      return false;
    }

  }

  logout() {
    localStorage.removeItem('jwttoken');

    this.router.navigateByUrl('login');
  }

  getCurrentAccountId() {
    const jwttoken = localStorage.getItem('jwttoken');
    const decodedToken = this.jwtHelper.decodeToken(jwttoken);
    return decodedToken.accountId;
  }

  getCurrentAccountType() {
    if ('jwttoken' in localStorage) {
      const jwttoken = localStorage.getItem('jwttoken');
      const decodedToken = this.jwtHelper.decodeToken(jwttoken);
      return decodedToken.accountType;
    } else {
      return false;
    }
  }

  makePostRequest(body: CredentialModel) {
    return this.http.makePostRequest('http://localhost:8080/login', body);
  }

}
