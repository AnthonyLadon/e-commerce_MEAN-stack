import { Component } from "@angular/core";
import { BannerComponent } from "../../components/banner/banner.component";
import { ProductSliderComponent } from "../../components/product-slider/product-slider.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [BannerComponent, ProductSliderComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
