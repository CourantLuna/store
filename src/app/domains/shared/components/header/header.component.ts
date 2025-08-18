import { Component, inject, Input, signal, SimpleChanges, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink,Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cartProducts = this.cartService.cart;
  total = this.cartService.total;

  private router = inject(Router);
  url = signal(this.router.url);

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.url.set(this.router.url));
  }

  isActive(path: string, exact = false) {
    const u = this.url();
    return exact ? u === path : u.startsWith(path);
  }

  toggleSidebar() {
    this.cartService.setHideSidebar(!this.cartService.getHideSidebar());
  }

  get hideSidebar() {
    return this.cartService.getHideSidebar();
  }
}
