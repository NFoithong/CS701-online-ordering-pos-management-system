import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/customer/menu/menu.module').then( m => m.MenuPageModule)
  },  {
    path: 'cart',
    loadChildren: () => import('./modules/customer/cart/cart.module').then( m => m.CartPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
