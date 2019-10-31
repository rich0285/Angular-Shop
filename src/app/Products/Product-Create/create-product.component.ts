import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {FormBuilder} from '@angular/forms';
import {Product} from '../Model/Clothing';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productFormm = this.form.group({
    clothingName: [''],
    size: [''],
    clothingtype: [''],
    price: [''],
    clothingInformation: [''],
    imgLink: [''],
    }
  )

  constructor(private productService: ProductService, private form: FormBuilder, private router: Router) { }
  ngOnInit() {
     }

  save() {
    const productFromFields = this.productFormm.value;
    this.productService.createProduct(productFromFields as Product).subscribe(() => {
      this.router.navigateByUrl('/CreateProduct');
    });
  }

}

