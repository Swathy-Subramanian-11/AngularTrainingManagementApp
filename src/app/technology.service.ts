// technology.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '../models/Technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  baseUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5087/api/Technology/';
  }

  getAllTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.baseUrl);
  }

  getTechnologyById(techId: number): Observable<Technology> {
    return this.http.get<Technology>(this.baseUrl + "ById/" + techId);
  }

  getTechnologiesByType(type: string): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.baseUrl + "ByType/" + type);
  }

  addTechnology(tech: Technology): Observable<Technology> {
    return this.http.post<Technology>(this.baseUrl, tech);
  }

  updateTechnology(techId: number, tech: Technology): Observable<Technology> {
    return this.http.put<Technology>(this.baseUrl + techId, tech)
  }

  deleteTechnology(techId: number): Observable<any> {
    return this.http.delete<Technology>(this.baseUrl + techId);
  }
}
