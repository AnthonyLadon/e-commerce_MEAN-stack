import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent {
  @Input() TotalProductsFetched: number;

  constructor() {}
}
