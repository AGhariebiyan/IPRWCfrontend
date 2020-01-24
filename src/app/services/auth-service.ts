import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {Observable} from 'rxjs';
import {CredentialModel} from '../models/credential.model';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credential: CredentialModel;
  user: User;

  constructor(private http: HttpService, private router: Router) {}

  login(credentials: CredentialModel) {
    if (credentials.email !== '' && credentials.password !== '') {
      this.makePostRequest(credentials)
        .subscribe(data => {
          this.user = data as User;
          console.log(this.user.email);
          localStorage.setItem('jwttoken', this.user.jwttoken); }
      );
    }
  }

  logout() {
    localStorage.clear();

    this.router.navigateByUrl('login');
  }

  makePostRequest(body: CredentialModel) {
    return this.http.makePostRequest('http://localhost:8080/login', body);
  }

}
