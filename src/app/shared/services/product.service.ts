import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../Products/Model/Clothing';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getClothing(): Observable<Product[]> {
    return this.http.get<any>(environment.baseUrl + '/Clothing')
      .pipe(
        map(paging => {
          return paging.list;
        })
      );
  }
  getClothingById(id): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl + '/Clothing/' + id);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.baseUrl + '/Clothing', product );
  }
  DeleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(environment.baseUrl + '/Clothing/' + id);
  }
  constructor(private http: HttpClient) {}
}


