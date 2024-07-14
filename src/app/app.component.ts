import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrainerComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTrainingManagementApp';
}

