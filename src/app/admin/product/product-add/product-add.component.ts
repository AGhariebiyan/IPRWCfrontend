import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
    this.productAddForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
      'imageLink': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const name = this.productAddForm.value.name;
    const description = this.productAddForm.value.description;
    const price = this.productAddForm.value.price;
    const amount = this.productAddForm.value.amount;
    const imageLink = this.productAddForm.value.imageLink;

    const product = new Product(name, description, price, amount, imageLink);

    this.productService.addProduct(product).subscribe();
    this.route.navigateByUrl('admin/products');
  }

}
