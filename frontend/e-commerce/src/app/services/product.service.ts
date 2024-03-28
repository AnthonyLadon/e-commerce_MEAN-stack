import { Injectable } from "@angular/core";
import { Product } from "../types/product";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { apiUrlBase } from "../private";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = apiUrlBase;
  constructor(private http: HttpClient) {}

  // Fetch all products by default => else fetch the number of products specified
  getProducts(count: number = 0) {
    if (count > 0) {
      return this.http
        .get<Product[]>(`${this.apiUrl}/products`)
        .pipe(map((data) => data.slice(0, count)));
    } else {
      return this.http.get<Product[]>(`${this.apiUrl}/products`);
    }
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
