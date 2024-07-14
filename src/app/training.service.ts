import { Injectable } from '@angular/core';
import { Training } from '../models/Training';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  //private trainings: Training[] = [];
  baseUrl: string;
  token = localStorage.getItem("token");
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:5066/api/Training/";
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };
  newTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(this.baseUrl, training);
  }
  getAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl);
  }
  getTraining(trainingId: number): Observable<Training> {
    return this.http.get<Training>(this.baseUrl + "ById/" + trainingId);
  }
  getByTrainer(trainerId: number): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl + "ByTrainer/" + trainerId);
  }
  getByTechnology(techId: number): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl + "ByTechnology/" + techId);
  }
  updateTraining(trainingId: number, training: Training): Observable<Training> {
    return this.http.put<Training>(this.baseUrl + trainingId, training);
  }
  deleteTraining(trainingId: number): Observable<any> {
    return this.http.delete(this.baseUrl + trainingId);
  }
}
