import { Injectable } from "@angular/core";
import { Product } from "../types/product";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "https://api.escuelajs.co/api/v1";
  constructor(private http: HttpClient) {}

  // Fetch all products and return 10 products by default
  getProducts(count = 10) {
    return this.http
      .get<Product[]>(`${this.apiUrl}/products`)
      .pipe(map((data) => data.slice(0, count)));
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  getCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getProductsByCategory(categoryId: string) {
    return this.http.get<Product[]>(
      `${this.apiUrl}/categories/${categoryId}/products`
    );
  }
}
