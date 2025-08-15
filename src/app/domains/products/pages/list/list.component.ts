import { Component, inject, input, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';

import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, CommonModule, HeaderComponent, ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  cart = this.cartService.cart;
  products = signal<Product[]>([]);
  hideSidebar = signal(true);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (currentProducts) => {
        this.products.set(currentProducts);
        console.log('Products fetched successfully:', currentProducts);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
  })
}
// constructor() {
//   // Initialize any necessary properties or services here
// const initialProducts: Product[] = [
//   { id: 1, title: 'Product 1', price: 300, imageUrl: 'https://picsum.photos/640/640?r=1', creationAt: new Date(), description: 'Description for Product 1' },
//   { id: 2, title: 'Product 2', price: 400, imageUrl: 'https://picsum.photos/640/640?r=2', creationAt: new Date(), description: 'Description for Product 2' },
//   { id: 3, title: 'Product 3', price: 500, imageUrl: 'https://picsum.photos/640/640?r=3', creationAt: new Date(), description: 'Description for Product 3' },
//   { id: 4, title: 'Product 4', price: 350, imageUrl: 'https://picsum.photos/640/640?r=4', creationAt: new Date(), description: 'Description for Product 4' },
//   { id: 5, title: 'Product 5', price: 600, imageUrl: 'https://picsum.photos/640/640?r=5', creationAt: new Date(), description: 'Description for Product 5' },
//   { id: 6, title: 'Product 6', price: 450, imageUrl: 'https://picsum.photos/640/640?r=6', creationAt: new Date(), description: 'Description for Product 6' },
//   { id: 7, title: 'Product 7', price: 700, imageUrl: 'https://picsum.photos/640/640?r=7', creationAt: new Date(), description: 'Description for Product 7' },
//   { id: 8, title: 'Product 8', price: 550, imageUrl: 'https://picsum.photos/640/640?r=8', creationAt: new Date(), description: 'Description for Product 8' },
//   { id: 9, title: 'Product 9', price: 800, imageUrl: 'https://picsum.photos/640/640?r=9', creationAt: new Date(), description: 'Description for Product 9' },
//   { id: 10, title: 'Product 10', price: 650, imageUrl: 'https://picsum.photos/640/640?r=10', creationAt: new Date(), description: 'Description for Product 10' }
// ];

//   this.products.set(initialProducts);
// }

  addToCart(product: Product) {
    // alert(JSON.stringify(product));
    this.cart.update(cartItems =>  [...cartItems, product]   );
    this.hideSidebar.set(false);
  }
}
