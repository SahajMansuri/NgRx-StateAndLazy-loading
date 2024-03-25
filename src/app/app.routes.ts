import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'List1', loadChildren:() => import('./components/product/product.module').then(m => m.ProductModule)},
    {path:'List', loadComponent:() => import('./components/products-list/products-list.component').then( c => c.ProductsListComponent)}
];
