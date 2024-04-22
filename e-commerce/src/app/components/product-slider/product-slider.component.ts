import { Component, OnInit, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../types/product";
import { Observable } from "rxjs";
import { ProductService } from "../../services/product.service";
import { RouterLink } from "@angular/router";
import { ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-product-slider",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./product-slider.component.html",
  styleUrl: "./product-slider.component.css",
})
export class ProductSliderComponent implements OnInit {
  product$: Observable<Product[]> | null = null;
  loadingProducts: boolean = true;
  spinner$: Observable<boolean> | null = null; // Spinner observable

  @ViewChild("carousel") carouselContainer!: ElementRef; // Refer to the carousel container
  @Input() scrollSpeed: number = 5000;
  @Input() TotalProductsFetched: number;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product$ = this.productService.getProducts(this.TotalProductsFetched); // (param = nb of products displayed, if "0" fetch all products)
    this.autoScroll();
    this.spinner$ = this.productService.spinner$; // Spinner observable from the service
  }

  autoScroll(): void {
    setInterval(() => {
      if (!this.carouselContainer) {
        return;
      }
      const carouselContainer = this.carouselContainer.nativeElement;

      // Total width of the carousel
      const carouselWidth = carouselContainer.scrollWidth;
      // Get the scroll position
      let scrollPosition = carouselContainer.scrollLeft;
      // Get the visible width of the carousel
      const visibleWidth = carouselContainer.clientWidth;

      // If the scroll position is at the end of the carousel
      if (scrollPosition + visibleWidth >= carouselWidth) {
        carouselContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselContainer.scrollBy({ left: visibleWidth, behavior: "smooth" });
      }
    }, this.scrollSpeed);
  }
}
