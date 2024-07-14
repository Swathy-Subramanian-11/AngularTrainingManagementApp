import { Injectable } from '@angular/core';
import { Trainee } from '../models/Trainee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  baseUrl: string;
  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:5087/api/Trainee/";
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization':"Bearer "+token
    })
  };
  getAll(): Observable<Trainee[]> {
    return this.http.get<Trainee[]>(this.baseUrl);
  }

  getTrainee(eid: number, tid: number): Observable<Trainee>{
    return this.http.get<Trainee>(this.baseUrl+ "ByIdTId/" + eid + tid);
  }

  getTraineeByEmpId(eid: number): Observable<Trainee[]> {
    return this.http.get<Trainee[]>(this.baseUrl + "ById/" + eid);
  }
  getTraineeByTraId(tid: number): Observable<Trainee[]> {
    return this.http.get<Trainee[]>(this.baseUrl + "ByTid/" + tid);
  }
  addTrainee(tra: Trainee): Observable<Trainee> {
    return this.http.post<Trainee>(this.baseUrl, tra);
  }
  updateTrainee(eid: number, tid: number): Observable<Trainee> {
    return this.http.put<Trainee>(this.baseUrl + eid, tid);
  }
  deleteTrainee(eid: number, tid: number): Observable<Trainee> {
    return this.http.delete<Trainee>(this.baseUrl + eid + tid);
  }
}
