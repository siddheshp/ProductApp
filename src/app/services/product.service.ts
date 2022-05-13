import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
          //http://localhost:5000/api/
  apiUrl = `${environment.apiBaseUrl}products`;

  constructor(private client:HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.client.get<Product[]>(this.apiUrl);
  }
}
