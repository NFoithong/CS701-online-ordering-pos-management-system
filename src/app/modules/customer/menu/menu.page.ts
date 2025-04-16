import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { CartService } from 'src/app/core/services/cart.service';
import { IonHeader, IonLabel, IonButton } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // ✅ needed for pipes like slice, date, currency, etc.

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [CommonModule, IonicModule], // ✅ this is essential!

})

export class MenuPage implements OnInit {
  items: MenuItem[] = [];

  // Inject in constructor
  constructor(private menuService: MenuService, private cartService: CartService) {}

  // Add method
  addToCart(item: MenuItem) {
    this.cartService.addToCart(item);
  }
  
  ngOnInit() {
    this.menuService.getMenuItems().subscribe(data => {
      this.items = data;
    });
  }
}
