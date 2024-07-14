import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../trainer.service';
import { CommonModule } from '@angular/common';
import { Trainer } from '../../models/Trainer';


@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {

  trainers: Trainer[];
  trainer: Trainer;
  trainersByType: Trainer[];
  errMsg: string;
  constructor(private trainerSvc: TrainerService) {
    this.trainer = new Trainer(0, "", "", "", "");
    this.trainers = [];
    this.trainersByType = [];
    this.errMsg = "";
    this.showAllTrainers();
  }
  showAllTrainers() {
    this.trainerSvc.getAllTrainers().subscribe({
      next: (response: Trainer[]) => {
        this.trainers = response;
      }, error: (err) => alert(err.error)
    });
  }
  showTrainer() {
    this.trainerSvc.getOneTrainer(this.trainer.trainerId).subscribe({
      next: (response: Trainer) => {
        this.trainer = response;
      }, error: (err) => alert(err.error)
    });
  }
  showTrainerbyType() {
    this.trainerSvc.getTrainerByType(this.trainer.trainerType).subscribe({
      next: (response: Trainer[]) => {
        this.trainersByType = response;
      }, error: (err) => { this.trainersByType = []; this.errMsg = err.error; alert(err.error) }
    })
  }

  addTrainer() {
    this.trainerSvc.addTrainer(this.trainer).subscribe({
      next: (response: any) => {
        alert("New Trainer added");
        this.trainer = new Trainer(0, "", "", "", "");
        this.showAllTrainers();
      }, error: (err) => alert(err.error)
    });
  }

  updateTrainer() {
    this.trainerSvc.updateTrainer(this.trainer.trainerId, this.trainer).subscribe({
      next: (response: Trainer) => {
        alert("Trainer details updated");
        this.trainer = new Trainer(0, "", "", "", "");
        this.showAllTrainers();
      }, error: (err) => alert(err.error)
    });
  }

  deleteTrainer() {
    this.trainerSvc.deleteTrainer(this.trainer.trainerId).subscribe({
      next: (response: Trainer) => {
        alert("Trainer deleted");
        this.trainer = new Trainer(0, "", "", "", "");
        this.showAllTrainers();
      }, error: (err) => alert(err.error)
    });
  }


}

