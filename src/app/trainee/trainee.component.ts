import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TraineeService } from '../trainee.service';
import { Trainee } from '../../models/Trainee';

@Component({
  selector: 'app-trainee',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './trainee.component.html',
  styleUrl: './trainee.component.css'
})
export class TraineeComponent {
  trainee: Trainee;
  trainees: Trainee[];
  traineebyEmpId: Trainee[];
  traineebyTraId: Trainee[];

  
  errMsg: string;
  constructor(private traSvc: TraineeService) {
    this.trainee = new Trainee(0, 0, "", );
    this.trainees = [];
    this.traineebyEmpId = [];
    this.traineebyTraId = [];
    this.errMsg = "";
    this.getAll();
  }
  getAll() {
    this.traSvc.getAll().subscribe({
      next: (response: Trainee[]) => {
        this.trainees = response;
      }, error: (err) => alert(err.error)
    });
  }
  getTrainee() {
    this.traSvc.getTrainee(this.trainee.empId, this.trainee.tid).subscribe({
      next: (response: Trainee) => {
        this.trainee = response;
      }, error: (err) => alert(err.error)
    });
  }
  getTraineebyTraId() {
    this.traSvc.getTraineeByTraId(this.trainee.tid).subscribe({
      next: (response: Trainee[]) => {
        this.traineebyTraId = response;
      }, error: (err) => { this.traineebyTraId = []; this.errMsg = err.error; alert(err.error) }
    })
  }
  getTraineeByEmpId() {
    this.traSvc.getTraineeByEmpId(this.trainee.empId).subscribe({
      next: (response: Trainee[]) => {
        this.traineebyEmpId = response;
      }, error: (err) => { this.traineebyEmpId = []; this.errMsg = err.error; alert(err.error) }
    })
  }
  addTrainee() {
    this.traSvc.addTrainee(this.trainee).subscribe({
      next: (response: any) => {
        alert("New Trainee Added");
        this.trainee = new Trainee(0, 0, "");
        this.getAll();
        //this.errMsg = "";
      }, error: (err) => alert(err.error)
    });
  }
  updateTrainee() {
    this.traSvc.updateTrainee(this.trainee.empId, this.trainee.tid).subscribe({
      next: (response: Trainee) => {
        alert("Trainee Updated Successfully");
        this.trainee = new Trainee(0, 0, "");
        this.getAll();
      }, error: (err) => alert(err.error)
    });
  }
  deleteTrainee() {
    this.traSvc.deleteTrainee(this.trainee.empId, this.trainee.tid).subscribe({
      next: (response: Trainee) => {
        alert("Trainee Deleted");
        this.trainee = new Trainee(0, 0, "");
        this.getAll();
      }, error: (err) => alert(err.error)
    });
}
