import { Component, OnInit } from "@angular/core";
import { NgIf } from "@angular/common";
import { RouterLink, Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

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

    // check if user is logged in
    let user = localStorage.getItem("user");
    if (user) {
      this.isLogged = true;
    }
  }
}
