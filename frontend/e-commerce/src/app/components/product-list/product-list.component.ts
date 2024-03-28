import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../types/product";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, RouterLink, NgxPaginationModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent implements OnInit {
  product$: Observable<Product[]> | null = null;
  @Input() TotalProductsFetched: number;
  itemsPerPage: number = 10;
  currentPage: number = 1; // default page

  constructor(private productService: ProductService) {}

  // fetch all products (param = nb of products displayed)
  ngOnInit() {
    this.product$ = this.productService.getProducts(this.TotalProductsFetched);
  }
}
