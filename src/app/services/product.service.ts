import { HttpService } from './http-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpService){}

    getProducts(): Observable<Product[]>{
        return this.http.makeGetRequest('http://localhost:8080/product');
    }

    addProduct(body:any) {
        this.http.makePostRequest('http://localhost:8080/product/add', body)
        console.log(body + "in de service")
    }

    deleteProduct(id: number) {
        this.http.makeDeleteRequest("http://localhost:8080/product/delete/" + id);
    }

    updateProduct(id: number, body: any) {
        this.http.makePutRequest("http://localhost:8080/product/update/" + id, body)
    }

}