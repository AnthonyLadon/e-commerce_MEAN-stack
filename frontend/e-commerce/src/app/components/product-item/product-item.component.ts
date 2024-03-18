import { Component } from "@angular/core";
import { Product } from "../../types/product";
import { Input } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-product-item",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./product-item.component.html",
  styleUrl: "./product-item.component.css",
})
export class ProductItemComponent {
  // @Input is a decorator that makes the product property available for binding by the external component
  @Input() product: Product | null = null;
  constructor() {}
}
