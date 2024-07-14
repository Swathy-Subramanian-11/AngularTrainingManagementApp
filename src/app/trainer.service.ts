
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Trainer } from '../models/Trainer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:5087/api/Trainer/";
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization':"Bearer" + token
    })
  };
  getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.baseUrl);
  }
  getOneTrainer(tid: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.baseUrl + "ByTrainerId/" + tid, this.httpOptions);
  }
  getTrainerByType(ttype: string): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.baseUrl + "ByType/" + ttype, this.httpOptions);
  }
  addTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(this.baseUrl, JSON.stringify(trainer), this.httpOptions);
  }
  updateTrainer(tid: number, trainer: Trainer): Observable<Trainer> {
    return this.http.put<Trainer>(this.baseUrl + "ByTrainerId/" + tid, JSON.stringify(trainer), this.httpOptions);
  }
  deleteTrainer(tid: number): Observable<any> {
    return this.http.delete<Trainer>(this.baseUrl + "ByTrainerId/" + tid, this.httpOptions);
  }
}
