import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cartProducts = this.cartService.cart;
  total = this.cartService.total;

  @Input() hideSidebar = signal(true);

  toggleSidebar() {
    this.hideSidebar.update(value => !value);
  }
}
