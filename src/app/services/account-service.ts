import {Injectable} from '@angular/core';
import {HttpService} from './http-client.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  account: Account[] = [];

  constructor(private http: HttpService) {}

  getAccountsFromDatabase(): Observable<Account[]> {
    return this.http.makeGetRequest('http://localhost:8080/account');
  }

  addAccount(body: any) {
    return this.http.makePostRequest('http://localhost:8080/account/add', body);
    console.log(body + 'in de serice');
  }

  updateAccount(id: number, body: any) {
    return this.http.makePutRequest('http://localhost:8080/update' + id, body);
  }

  deleteAccount(id: number) {
    return this.http.makeDeleteRequest('http://localhost:8080/delete/' + id);
  }

}
