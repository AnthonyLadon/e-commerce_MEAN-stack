import { Injectable } from "@angular/core";
import { Product } from "../types/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "https://api.escuelajs.co/api/v1";
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product>(`${this.apiUrl}/products/23`);
    // .pipe(map((data) => data.results.slice(0, count)));
    // pipe permet de modifier le flux de données (RxJS)
    // -> ici on ne garde que le tableau results
    // count limite le nombre de films à 20 (par défaut)
  }
}
