import { Component } from '@angular/core';
import { TrainingUser } from '../../models/TrainingUser'
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: TrainingUser;
  userId: string;
  password: string;
  constructor(private http: HttpClient) {
    this.user = new TrainingUser("", "", "");
    this.userId = "";
    this.password = "";
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };
  login() {
    this.http.post("http://localhost:5087/api/TrainingUser/Login/" + this.userId,
      JSON.stringify(this.password), this.httpOptions)
      .subscribe({
        next: (response: any) => {
          alert("Login successfull");
          localStorage.setItem("userId", this.userId);
          this.getUser();
        }, error: (err) => alert(err.error)
      });
  }
  getUser() {
    this.http.get<TrainingUser>("http://localhost:5087/api/TrainingUser/" + this.userId)
      .subscribe({
        next: (response: TrainingUser) => {
          localStorage.setItem("role", response.userRole);
          this.getToken();
        }, error: (err) => alert(err.error)
      });
  }
  getToken() {
    let secretKey = "hello hi how are you heaven knows i am miserable now";
    let role = localStorage.getItem("role");
    this.http.get("http://localhost:5087/api/Auth/Token/" + this.userId + "/" + role + "/" + secretKey, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          localStorage.setItem("token", response);
          this.userId = "";
          this.password = "";
        }, error: (err) => console.log(err.error)
      });
  }
}
