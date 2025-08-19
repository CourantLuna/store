import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input({ required: true }) id!: string; // parametro requerido para recibir el ID del producto
  
  private productService = inject(ProductService);

  cartService = inject(CartService);
  
  coverImage = signal<string>('https://placehold.co/600x450?text=No+Image');
  product = signal<Product | null>(null);

  ngOnInit() {
    this.getProduct();
    }

    addToCart(product: Product | null) {
      if (product) {
        this.cartService.addToCart(product);
      }
    }

  getProduct() {
    this.productService.getProductById(this.id).subscribe({
      next: (product) => {
        this.product.set(product);
        this.coverImage.set(product?.images ? product.images[0] : 'https://placehold.co/600x450?text=No+Image');
      }, error: (error) => {
        console.error('Error fetching product details:', error);
      }
    });
  }

 

  
    onImgError(event: Event) {
      const target = event.target as HTMLImageElement;
      target.src = "https://placehold.co/400x400?text=No+Image";
    }
}




