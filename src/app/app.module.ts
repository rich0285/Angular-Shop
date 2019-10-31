import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import {ListComponent} from './Products/productList/list.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './shared/services/product.service';
import { ClothingDetailComponent } from './Products/clothing-detail/clothing-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateProductComponent } from './Products/Product-Create/create-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    ClothingDetailComponent,
    CreateProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
