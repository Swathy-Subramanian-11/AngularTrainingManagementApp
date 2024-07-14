import { Component } from '@angular/core';
import { Training } from '../../models/Training';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  trainings: Training[];
  training: Training;
  trnByTrainer: Training[];
  trnByTechnology: Training[];
  constructor(private trainingSvc: TrainingService) {
    this.trainings = [];
    this.training = new Training(0, 0, 0, new Date(), new Date());
    this.trnByTrainer = [];
    this.trnByTechnology = [];
    this.showAll();
  }
  showAll() {
    this.trainingSvc.getAllTrainings()
      .subscribe({
        next: (response: Training[]) => {
          this.trainings = response;
        }, error: (err) => alert(err.error)
      });
  }
  showTraining() {
    this.trainingSvc.getTraining(this.training.trainingId)
      .subscribe({
        next: (response: Training) => {
          this.training = response;
        }, error: (err) => alert(err.error)
      });
  }
  showTrainingByTrainer() {
    this.trainingSvc.getByTrainer(this.training.trainerId)
      .subscribe({
        next: (response: Training[]) => {
          this.trainings = response;
        }, error: (err) => {
          this.trnByTrainer = [];
          alert(err.error)
        }
      });
  }
  showTrainingByTechnology() {
    this.trainingSvc.getByTechnology(this.training.technologyId)
      .subscribe({
        next: (response: Training[]) => {
          this.trainings = response;
        }, error: (err) => {
          this.trnByTechnology = [];
          alert(err.error)
        }
      });
  }
  addTraining() {
    this.trainingSvc.newTraining(this.training)
      .subscribe({
        next: (response: Training) => {
          alert("New training added.");
          this.training = new Training(0, 0, 0, new Date(), new Date());
          this.showAll();
        }, error: (err) => alert(err.error)
      });
  }
  updateTraining() {
    this.trainingSvc.deleteTraining(this.training.trainingId)
      .subscribe({
        next: (response: any) => {
          alert("Training details updated.");
          this.training = new Training(0, 0, 0, new Date(), new Date());
          this.showAll();
        }, error: (err) => alert(err.error)
      });
  }
  deleteTraining() {
    this.trainingSvc.deleteTraining(this.training.trainingId)
      .subscribe({
        next: (response: any) => {
          alert("Training deleted.");
          this.training = new Training(0, 0, 0, new Date(), new Date());
          this.showAll();
        }, error: (err) => alert(err.error)
      });
  }
}
