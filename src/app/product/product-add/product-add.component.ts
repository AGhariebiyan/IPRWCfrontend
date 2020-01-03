import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productAddForm = new FormGroup({
      'name': new FormControl(null),
      'description': new FormControl(null),
      'price': new FormControl(null),
      'amount': new FormControl(null),
      'imageLink': new FormControl(null)
    });
  }

  onSubmit() {
    const name = this.productAddForm.value.name;
    const description = this.productAddForm.value.description;
    const price = this.productAddForm.value.price;
    const amount = this.productAddForm.value.amount;
    const imageLink = this.productAddForm.value.imageLink;

    console.log(name + description + price + amount + imageLink);

    const product = new Product(name, description, price, amount, imageLink);

    this.productService.addProduct(product);
    // console.log(eachProduct)
  }

}
