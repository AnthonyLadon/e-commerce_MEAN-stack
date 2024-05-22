import { CommonModule, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgIf],
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.css",
})
export class SignupComponent {
  constructor(private userService: UserService) {}

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  submitSignup() {
    if (!this.firstName || !this.lastName || !this.email || !this.password) {
      console.error("Missing one or several required form fields");
      return;
    }
    this.userService
      .signup(this.firstName, this.lastName, this.email, this.password)
      .subscribe(
        (response) => {
          console.log("Signup successful", response);
        },
        (error) => {
          console.error("Error signing up:", error);
        }
      );
  }
}
