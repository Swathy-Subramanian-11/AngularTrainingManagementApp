import { Component } from '@angular/core';
import { Training } from '../../models/Training';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TrainingService } from '../training.service';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../../models/Trainer';
import { TechnologyService } from '../technology.service';
import { Technology } from '../../models/Technology';


@Component({
  selector: 'app-training',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  trainings: Training[];
  technologies: Technology[];

  training: Training;
  technology: Technology;

  trnByTrainer: Training[];
  trnByTechnology: Training[];
  errMsg: string;
  techIds: number[];
  trainerIds: number[];
  constructor(private trainingSvc: TrainingService, private trainerSvc: TrainerService,
    private techService: TechnologyService) {
    this.trainings = [];
    this.training = new Training(0, 0, 0, new Date(), new Date());
    this.technologies = [];
    this.technology = new Technology(0, "","");

    this.trnByTrainer = [];
    this.trnByTechnology = [];
    this.techIds = [];
    this.trainerIds = [];
    this.errMsg = "";
    this.trainerSvc.getAllTrainers()
      .subscribe({
        next: (response: any) => {
          const trainers: any[] = response;
          for (let trainer of trainers) {
            this.trainerIds.push(trainer.trainerId);
          }
        }, error: (err) => alert(err.error)

      })
    this.techService.getAllTechnologies()
      .subscribe({
        next: (response: any) => {
          const technologies: any[] = response;
          for (let technology of technologies) {
            this.techIds.push(technology.technologyId);
          }
        }, error: (err) => alert(err.error)

      })


    this.showAll();
  }


  
  getAllTrainers(){
  this.trainerSvc.getAllTrainers()
    .subscribe({
      next: (response: Trainer[]) => {
        let trainers: Trainer[];

        trainers = response;
        for (let trainer of trainers) {
          this.trainerIds.push(trainer.trainerId);
        }
      }, error: (err) => alert(err.error)
    });
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
          this.trnByTrainer = response;
        }, error: (err) => {
          this.trnByTrainer = [];
          this.errMsg = err.error;
          alert(err.error)
        }
      });
  }
  showTrainingByTechnology() {
    this.trainingSvc.getByTechnology(this.training.technologyId)
      .subscribe({
        next: (response: Training[]) => {
          this.trnByTechnology = response;
        }, error: (err) => {
          this.trnByTechnology = [];
          this.errMsg = err.error;
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
    this.trainingSvc.updateTraining(this.training.trainingId, this.training)
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
