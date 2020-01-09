import { HttpService } from './http-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products: Product[] = [];

    constructor(private http: HttpService) {}

    getProductsFromDatabase(): Observable<Product[]> {
        return this.http.makeGetRequest('http://localhost:8080/product');
    }

    addProduct(body: any) {
        return this.http.makePostRequest('http://localhost:8080/product/add', body);
        console.log(body + 'in de service');
    }

    deleteProduct(id: number) {
      return this.http.makeDeleteRequest('http://localhost:8080/product/delete/' + id);
    }

    updateProduct(id: number, body: any) {
        return this.http.makePutRequest('http://localhost:8080/product/update/' + id, body);
    }

    getProductById(id: number) {
      return this.http.makeGetRequest('http://localhost:8080/product/' + id);
    }

}
