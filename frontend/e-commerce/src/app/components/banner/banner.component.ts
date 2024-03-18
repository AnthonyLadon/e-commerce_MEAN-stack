import { Component } from "@angular/core";
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductService } from "../../services/product.service";
import { NgIf } from "@angular/common";
import { Input } from "@angular/core";

@Component({
  selector: "app-banner",
  standalone: true,
  imports: [ProductItemComponent, NgIf],
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.css",
})
export class BannerComponent {
  // @Input() products: ProductItemComponent[] = [];
  // constructor(private productService: ProductService) {}
  // ngOnInit() {
  //   this.products = this.productService.getProducts();
  // }
}
