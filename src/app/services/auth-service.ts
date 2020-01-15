import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {Observable} from 'rxjs';
import {CredentialModel} from '../models/credential.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credential: CredentialModel;

  constructor(private http: HttpService) {}

  checkCredentials(body: CredentialModel) {
    return this.http.makePostRequest('http://localhost:8080/login', body);
  }

}
