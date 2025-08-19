import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () => import('@shared/components/layout/layout.component').
    then(m => m.LayoutComponent),

    children: [

      { path: '', 
        loadComponent: () => import('@products/pages/list/list.component').
        then(m => m.ListComponent)},

      { path: 'about', 
       loadComponent: () => import('@info/pages/about/about.component').
       then(m => m.AboutComponent) },
        
      { path: 'product/:id', 
        loadComponent: () => import('@products/pages/product-detail/product-detail.component').
        then(m => m.ProductDetailComponent) },
      ]
  },


  { path: '**', 
  loadComponent: () => import('@info/pages/not-found/not-found.component').then(m => m.NotFoundComponent) } // Catch-all route for 404 Not Found
];
