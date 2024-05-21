import { CommonModule, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
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
