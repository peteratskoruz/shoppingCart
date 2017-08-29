import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    products: Array<Product> = [];

    constructor(private service: ProductService) {}

    ngOnInit() {
        this.service.getProducts()
            .subscribe(res => {
                this.products = res;
            });
    }
}
