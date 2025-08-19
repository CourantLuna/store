import { Component, inject, Input, signal, SimpleChanges, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cartProducts = this.cartService.cart;
  total = this.cartService.total;


  constructor() {
    
  }

  toggleSidebar() {
    this.cartService.setHideSidebar(!this.cartService.getHideSidebar());
  }

  get hideSidebar() {
    return this.cartService.getHideSidebar();
  }
}
