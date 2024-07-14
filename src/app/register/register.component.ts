import { Component } from '@angular/core';
import { TrainingUser } from '../../models/TrainingUser';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: TrainingUser;
  constructor(private http: HttpClient) {
    this.user = new TrainingUser("", "", "Dev");
  }
  register() {
    this.http.post<TrainingUser>("http://localhost:5087/api/TrainingUser/Register", this.user)
      .subscribe({
        next: (response: TrainingUser) => {
          alert("New user registerd");
          this.user = new TrainingUser("", "", "Dev");
        }, error: (err) => alert(err.error)
      });
  }
}
