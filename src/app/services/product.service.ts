import { HttpService } from './http-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {environment} from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products: Product[] = [];

    constructor(private http: HttpService) {}

    getProductsFromDatabase(): Observable<Product[]> {
        return this.http.makeGetRequest(environment.serverIp + '/product');
    }

    addProduct(body: any) {
        return this.http.makePostRequest(environment.serverIp + '/product/add', body);
        console.log(body + 'in de service');
    }

    deleteProduct(id: number) {
      return this.http.makeDeleteRequest(environment.serverIp + '/product/delete/' + id);
    }

    updateProduct(id: number, body: any) {
        return this.http.makePutRequest(environment.serverIp + '/product/update/' + id, body);
    }

    getProductById(id: number) {
      return this.http.makeGetRequest(environment.serverIp + '/product/' + id);
    }

}
