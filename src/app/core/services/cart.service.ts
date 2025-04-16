import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: MenuItem[] = [];
  private cartItems = new BehaviorSubject<MenuItem[]>([]);
  cart$ = this.cartItems.asObservable();

  addToCart(item: MenuItem) {
    this.items.push(item);
    this.cartItems.next(this.items);
  }

  removeFromCart(item: MenuItem) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.cartItems.next(this.items);
  }

  clearCart() {
    this.items = [];
    this.cartItems.next(this.items);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getItems(): MenuItem[] {
    return this.items;
  }
}
