import { Component } from '@angular/core';
import { Technology } from '../../models/Technology';
import { TechnologyService } from '../technology.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  technology: Technology;
  technologies: Technology[];
  technologiesByType: Technology[];
  errMsg: string;

  constructor(private techService: TechnologyService) {
    this.technology = new Technology(0, '', '');
    this.technologies = [];
    this.technologiesByType = [];
    this.errMsg = '';
    this.getAllTechnologies();
  }


  getAllTechnologies() {
    this.techService.getAllTechnologies()
      .subscribe({
        next: (response: Technology[]) => {
          this.technologies = response;
      }, error: (err) => alert(err.error)
    });
  }

  getTechnologyById() {
    this.techService.getTechnologyById(this.technology.technologyId)
      .subscribe({
        next: (response: Technology) => {
          this.technology = response;
      }, error: (err) => alert(err.error)
    });
  }

  getTechnologiesByType() {
    this.techService.getTechnologiesByType(this.technology.technologyType)
      .subscribe({
        next: (response: Technology[]) => {
          this.technologiesByType = response;
        }, error: (err) => { this.technologiesByType = []; this.errMsg = err.error; alert(err.error) }
      })
  }

  addTechnology() {
    this.techService.addTechnology(this.technology)
      .subscribe({
      next: (response: any) => {
          alert("New Technology Added");
          this.technology = new Technology(0, "", "");
          this.getAllTechnologies();
      }, error: (err) => alert(err.error)
    });
  }

  updateTechnology() {
    this.techService.updateTechnology(this.technology.technologyId, this.technology)
      .subscribe({
        next: (response: Technology) => {
          alert("Technology Updated Successfully");
          this.technology = new Technology(0, "", "");
          this.getAllTechnologies();
      }, error: (err) => alert(err.error)
    });
  }

  deleteTechnology() {
    this.techService.deleteTechnology(this.technology.technologyId).subscribe({
      next: (response: Technology) => {
        alert("Technology Deleted");
        this.technology = new Technology(0, "", "");
        this.getAllTechnologies();
      }, error: (err) => alert(err.error)
    });
  }
}
