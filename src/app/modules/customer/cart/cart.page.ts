import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
})
export class CartPage implements OnInit {
  cartItems: MenuItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  removeItem(item: MenuItem) {
    this.cartService.removeFromCart(item);
  }

  checkout() {
    // Placeholder for now
    alert('Checkout successful!');
    this.cartService.clearCart();
  }
}
