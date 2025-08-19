import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CarouselComponent } from "@shared/carousel/carousel.component";
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-product',
  imports: [CommonModule, CarouselComponent, ReversePipe, TimeAgoPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input({ required: true}) product!: Product;
 @Output() addToCart = new EventEmitter();

   isLoading = signal(false);


   // Efecto para esperar que la imagen cargue
  constructor() {
    effect(() => {
      if (!this.product) return;

      const img = new Image();
      img.src = this.product.images?.[0] || '';
      img.onload = () => this.isLoading.set(false);
    });
  }

  onImgError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = "https://placehold.co/400x400?text=No+Image";
  }
  

 addCartHandler() {
  console.log('add to cart', this.product);
  // Emit the product to the parent component
   this.addToCart.emit(this.product);
 }
}
