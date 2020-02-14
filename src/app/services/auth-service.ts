import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CredentialModel} from '../models/credential.model';
import {User} from '../models/user.model';
import {CanActivate, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment.prod';

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
    // if (credentials !== null) {
      this.makePostRequest(credentials)
        .subscribe(data => {
          this.user = data as User;
          this.setValueEmail(this.user.email);
          this.setValueAccountType(this.user.accountType);
          if (this.user.email !== null) {
            this.setValueIsLoggedIn(true);
            if (this.user.jwttoken !== null) {
              localStorage.setItem('jwttoken', this.user.jwttoken);
            }
            if (this.user.accountType === 'admin') {
              this.router.navigateByUrl('admin/products');
            } else {
              this.router.navigateByUrl('products');
            }
          }
        }
      );
  }

  canActivate(): boolean {
    const token = localStorage.getItem('jwttoken');
    if (token !== null && !this.jwtHelper.isTokenExpired(token) && this.user.accountType === 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('login');
    }
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

  makePostRequest(body: CredentialModel) {
    return this.http.makePostRequest(environment.serverIp + '/login', body);
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
