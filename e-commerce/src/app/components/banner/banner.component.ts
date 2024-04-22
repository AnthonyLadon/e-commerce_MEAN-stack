import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Input } from "@angular/core";

@Component({
  selector: "app-banner",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.css",
})
export class BannerComponent {
  displayBanner: boolean = true;

  bannerMainText: string = "Exclusives Sales: -30% on everything!";
  bannerSecondaryText: string = "*Free shipping on orders over 50$";
  constructor() {}
}
