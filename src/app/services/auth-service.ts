import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CredentialModel} from '../models/credential.model';
import {User} from '../models/user.model';
import {CanActivate, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  user: User;

  private email: BehaviorSubject<string>;
  private isLoggedIn: BehaviorSubject<boolean>;
  private accountType: BehaviorSubject<string>;

  constructor(private http: HttpService, private router: Router, public jwtHelper: JwtHelperService) {
    this.email = new BehaviorSubject<string>('');
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
    this.accountType = new BehaviorSubject<string>('');
  }

  login(credentials: CredentialModel) {
    if (credentials.email !== '' && credentials.password !== '') {
      this.makePostRequest(credentials)
        .subscribe(data => {
          this.user = data as User;
          this.setValueEmail(this.user.email);
          this.setValueAccountType(this.user.accountType);
          if (this.user.jwttoken !== null) {
              localStorage.setItem('jwttoken', this.user.jwttoken);
              return true;
            }
          }
      );
      this.setValueIsLoggedIn(true);
      console.log('auth' +this.getValueIsLoggedIn());
    } else {
      return false;
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwttoken');

    return !this.jwtHelper.isTokenExpired(token);
  }

  canActivate(): boolean {
    const token = localStorage.getItem('jwttoken');
    if (token !== null && !this.jwtHelper.isTokenExpired(token)) {

      return true;
    } else {
      this.router.navigateByUrl("login");
    }

    return true;
  }

  logout() {
    localStorage.removeItem('jwttoken');
    this.setValueIsLoggedIn(false);
    this.setValueAccountType('');
    this.setValueEmail('');
    this.router.navigateByUrl('login');
  }

  getCurrentAccountId() {
    const jwttoken = localStorage.getItem('jwttoken');
    const decodedToken = this.jwtHelper.decodeToken(jwttoken);
    return decodedToken.accountId;
  }

  // getCurrentAccountType() {
  //   if ('jwttoken' in localStorage) {
  //     const jwttoken = localStorage.getItem('jwttoken');
  //     const decodedToken = this.jwtHelper.decodeToken(jwttoken);
  //     return decodedToken.accountType;
  //   } else {
  //     return false;
  //   }
  // }

  makePostRequest(body: CredentialModel) {
    return this.http.makePostRequest('http://localhost:8080/login', body);
  }

  setValueEmail(newValue): void {
    this.email.next(newValue);
  }

  getValueEmail(): Observable<string> {
    return this.email.asObservable();
  }

  setValueIsLoggedIn(newValue): void {
    this.isLoggedIn.next(newValue);
  }

  getValueIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  setValueAccountType(newValue): void {
    this.accountType.next(newValue);
  }

  getValueAccountType(): Observable<string> {
    return this.accountType.asObservable();
  }
}
