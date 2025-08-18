import { Component, inject, input, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';

import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, CommonModule, HeaderComponent, ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   cartService = inject(CartService);
  private productService = inject(ProductService);

  cart = this.cartService.cart;
  products = signal<Product[]>([]);

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


  addToCart(product: Product) {
    // alert(JSON.stringify(product));
    // this.cart.update(cartItems =>  [...cartItems, product]   );
    this.cartService.addToCart(product);
  }
}
