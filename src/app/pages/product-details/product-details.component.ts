import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product.service';
import {Product} from '../../models/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product: Product;
  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
      /**one method**/
    /*this.route.params.subscribe(val => {
      this.service.getProductByName(val.productName)
          .subscribe(res => {
                this.product = res;
                console.log(res);
              }
          );
    });*/

    /**another methos**/
    this.route.params.switchMap(val => this.service.getProductById(val.productId))
    .subscribe(res => {
        this.product = res;
        console.log(res);
      });
  }

}
