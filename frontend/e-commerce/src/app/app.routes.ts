import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { ProductsComponent } from "./pages/products/products.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "product/:id",
    component: ProductDetailComponent,
  },
];
