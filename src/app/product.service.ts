import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('/api/products')
              .map(res => res.json());
  }

  addProduct(product) {
      return this.http.post('/api/products/',product)
  }

    getProductById(id: string) {
      return this.http.get('/api/products/'+id).map(res => res.json())
         /* .map(products => products.find(p => p.id === name));*/
  }

}
