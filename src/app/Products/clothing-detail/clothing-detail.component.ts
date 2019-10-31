import { Component, OnInit } from '@angular/core';
import {Product} from '../Model/Clothing';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clothing-detail',
  templateUrl: './clothing-detail.component.html',
  styleUrls: ['./clothing-detail.component.css']
})
export class ClothingDetailComponent implements OnInit {
product: Product;

constructor( private productService: ProductService,
             private route: ActivatedRoute) {}
             getProduct(id): void {
  this.productService.getClothingById(id).subscribe(product => this.product = product);
             }

  ngOnInit() {
  const id = Number( this.route.snapshot.paramMap.get('id'));
  this.getProduct(id);
  }

}
