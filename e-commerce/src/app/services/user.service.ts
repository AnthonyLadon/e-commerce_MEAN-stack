import { Injectable } from "@angular/core";
import { apiUrlBase } from "../private";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = apiUrlBase;

  constructor(private http: HttpClient) {}

  signup(firstName: string, lastName: string, email: string, password: string) {
    console.log(
      "user service angular" + firstName + lastName + email + password
    );
    return this.http
      .post(`${this.apiUrl}/users/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .pipe(
        catchError((error) => {
          console.error("Error posting product:", error);
          throw error;
        })
      );
  }
}
