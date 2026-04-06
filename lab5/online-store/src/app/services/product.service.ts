import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.API_URL}/products/`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/products/${id}/`);
  }
}
