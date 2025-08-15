import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CarouselComponent } from "../../../shared/carousel/carousel.component";

@Component({
  selector: 'app-product',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input({ required: true}) product!: Product;
 @Output() addToCart = new EventEmitter();

   isLoading = signal(false);


   // Efecto para esperar que la imagen cargue
  constructor() {
    // effect(() => {
    //   if (!this.product) return;

    //   const img = new Image();
    //   img.src = this.product.imageUrl;
    //   img.onload = () => this.isLoading.set(false);
    // });
  }

 addCartHandler() {
  console.log('add to cart', this.product);
  // Emit the product to the parent component
   this.addToCart.emit(this.product);
 }
}
