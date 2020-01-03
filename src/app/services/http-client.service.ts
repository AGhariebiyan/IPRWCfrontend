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
    this.http.post(query, body).subscribe();
  }

  makePutRequest(query: string, body: any) {
    this.http.put(query, body).subscribe();
  }

  makeDeleteRequest(query: string) {
    this.http.delete(query).subscribe();
  }

}