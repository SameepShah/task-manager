import { Component, OnInit } from '@angular/core';
import { Project } from '../services/Projects/project';
import { ProjectsService } from '../services/Projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectsService) { 
    
  }

  ngOnInit(): void {
    console.log("Test");
    this.projectService.getAllProjects().subscribe((data: Project[]) => {
        this.projects = data;
    });
  }

}
