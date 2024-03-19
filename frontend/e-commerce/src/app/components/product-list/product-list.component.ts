import { Component, input } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../types/product";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent implements OnInit {
  product$: Observable<Product[]> | null = null;

  constructor(private productService: ProductService) {}

  // fetch all products (max products in parameter)
  ngOnInit() {
    this.product$ = this.productService.getProducts(5);
  }
}
