import { Injectable } from "@angular/core";
import { Product } from "../types/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "https://api.escuelajs.co/api/v1";
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<Product>(`${this.apiUrl}/products/45`);
  }
}
