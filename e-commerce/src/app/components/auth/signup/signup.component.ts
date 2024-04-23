import { CommonModule, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.css",
})
export class SignupComponent {
  constructor() {}

  firstName: string = "";
  email: string = "";
  password: string = "";

  submitSignup() {
    console.log("Form submitted", this.firstName, this.email, this.password);
  }
}
