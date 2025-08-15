import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

}
