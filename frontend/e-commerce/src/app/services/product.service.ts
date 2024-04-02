import { Injectable } from "@angular/core";
import { Product } from "../types/product";
import { HttpClient } from "@angular/common/http";
import { catchError, finalize, map } from "rxjs/operators";
import { apiUrlBase } from "../private";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = apiUrlBase;
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spinner$ = this.spinnerSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch all products by default => else fetch the number of products specified
  getProducts(count: number = 0) {
    this.spinnerSubject.next(true); // Start spinner
    if (count > 0) {
      return this.http
        .get<Product[]>(`${this.apiUrl}/products`)
        .pipe(
          map((data) => data.slice(0, count)),
          catchError((error) => {
            console.error("Error fetching products:", error);
            throw error;
          })
        )
        .pipe(finalize(() => this.spinnerSubject.next(false)));
    } else {
      return this.http
        .get<Product[]>(`${this.apiUrl}/products`)
        .pipe(
          catchError((error) => {
            console.error("Error fetching products:", error);
            throw error;
          })
        )
        .pipe(finalize(() => this.spinnerSubject.next(false)));
    }
  }

  getProductById(id: number) {
    this.spinnerSubject.next(true); // Start spinner
    return this.http
      .get<Product>(`${this.apiUrl}/products/${id}`)
      .pipe(
        catchError((error) => {
          console.error("Error fetching product:", error);
          throw error;
        })
      )
      .pipe(finalize(() => this.spinnerSubject.next(false)));
  }

  // getCategories() {
  //   return this.http.get(`${this.apiUrl}/categories`);
  // }

  // getProductsByCategory(categoryId: string) {
  //   return this.http.get<Product[]>(
  //     `${this.apiUrl}/categories/${categoryId}/products`
  //   );
  // }
}
