import { Component, OnInit } from '@angular/core';

import {Product} from '../Model/Clothing';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[];

  getProducts(): void {
    this.productService.getClothing().subscribe(c => this.products = c);
  }
  deleteProduct(id: number): void {
    this.productService.DeleteProduct(id);

  }

  ngOnInit() {this.getProducts();
  }

}

