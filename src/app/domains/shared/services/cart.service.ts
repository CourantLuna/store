import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    return this.cart().reduce((total, product) => total + product.price, 0);
  });

  constructor() { }

  addToCart(product: Product) {
    console.log(`Adding to cart: ${JSON.stringify(product)}`);
    this.cart.update(cartItems => [...cartItems, product]);
  }
}
