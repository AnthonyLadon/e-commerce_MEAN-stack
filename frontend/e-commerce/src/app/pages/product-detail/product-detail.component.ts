import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../types/product";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.css",
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;
  spinner$: Observable<boolean> | null = null; // Spinner observable

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  // Fetch the product by its ID
  ngOnInit() {
    this.productId = this.route.snapshot.params["id"]; // Get the product ID from the URL
    this.productService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
    });
    this.spinner$ = this.productService.spinner$; // Spinner observable from the service
  }
}
