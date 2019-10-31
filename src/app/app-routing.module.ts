import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './Products/productList/list.component';
import {ClothingDetailComponent} from './Products/clothing-detail/clothing-detail.component';
import {CreateProductComponent} from './Products/Product-Create/create-product.component';




const routes: Routes = [
  {
    path: 'Products',
    component: ListComponent,
  },
  {
    path: 'Products/:id',
    component: ClothingDetailComponent,
  },
  {
    path: 'CreateProduct',
    component: CreateProductComponent,
  },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
