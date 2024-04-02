import { Component, OnInit } from "@angular/core";
import { RouterLink, Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ToggleMenu() {
    let menu: any = document.getElementById("menu-mobile");
    menu.classList.toggle("hidden"); // add or remove class hidden
  }

  ngOnInit(): void {
    // Close menu when navigate & change route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let menu: any = document.getElementById("menu-mobile");
        menu.classList.add("hidden");
      }
    });
  }
}
