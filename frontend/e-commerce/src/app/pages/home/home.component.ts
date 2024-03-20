import { Component } from "@angular/core";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ProductListComponent, BannerComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
