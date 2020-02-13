import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  account: Account[] = [];

  constructor(private http: HttpService) {}

  getAccountsFromDatabase(): Observable<Account[]> {
    return this.http.makeGetRequest(environment.serverIp + '/account');
  }

  addAccount(body: any) {
    return this.http.makePostRequest(environment.serverIp + '/account/add', body);
    console.log(body + 'in de serice');
  }

  updateAccount(id: number, body: any) {
    return this.http.makePutRequest(environment.serverIp + '/update' + id, body);
  }

  deleteAccount(id: number) {
    return this.http.makeDeleteRequest(environment.serverIp + '/delete/' + id);
  }

}
