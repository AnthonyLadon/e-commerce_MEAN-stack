import { Component } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../types/product";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  product$: Observable<Product> | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product$ = this.productService.getProduct();
  }
}
