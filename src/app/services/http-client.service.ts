import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  makeGetRequest(query: string): Observable<any> {
    return this.http.get(query);
  }

  makePostRequest(query: string, body: any) {
    return this.http.post(query, body);
  }

  makePutRequest(query: string, body: any) {
    return this.http.put(query, body);
  }

  makeDeleteRequest(query: string) {
    return this.http.delete(query);
  }

}
