import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() category_id?: string;

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
   this.getProducts();
  }


getProducts() {
  this.productService.getProducts(this.category_id).subscribe({
    next: (currentProducts) => {
      this.products.set(currentProducts);
      console.log('Products fetched successfully:', currentProducts);
    },
    error: (error) => {
      console.error('Error fetching products:', error);
    }
})
}

getCategories() {
  this.categoryService.getAllCategories().subscribe({
    next: (data) => {
      this.categories.set(data);
      console.log('Categories fetched successfully:', data);
    }, error: (error) => {
      console.error('Error fetching categories :', error);
    }
  });



}


  addToCart(product: Product) {
    // alert(JSON.stringify(product));
    // this.cart.update(cartItems =>  [...cartItems, product]   );
    this.cartService.addToCart(product);
  }
}
