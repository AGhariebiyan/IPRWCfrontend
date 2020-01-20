import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {Observable} from 'rxjs';
import {CredentialModel} from '../models/credential.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credential: CredentialModel;
  user: User;

  constructor(private http: HttpService) {}

  checkCredentials(credentials: CredentialModel) {
    if (credentials.email !== '' && credentials.password !== '') {
      this.makePostRequest(credentials)
        .subscribe(data => {
          this.user = data as User;
          console.log(this.user.email);
          // @ts-ignore
          localStorage.setItem('jwttoken', this.user.jwttoken); }
      );
    }
  }

  makePostRequest(body: CredentialModel) {
    return this.http.makePostRequest('http://localhost:8080/login', body);
  }

}
