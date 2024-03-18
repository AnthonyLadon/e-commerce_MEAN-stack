import { Component } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../types/product";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  product$: Observable<Product> | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("HomeComponent test requete API: ");
    this.product$ = this.productService.getProducts();
    console.log(this.product$.subscribe((data) => console.log(data)));
  }
}
