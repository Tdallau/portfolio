import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import * as projects from '../_json/projects.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../_modals/project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public baseUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b3654.appspot.com/o/';
  public projects: Project[] = (projects as any).default;
  public success = 'btn-primary';
  constructor(private modalService: NgbModal) { }

  ngOnInit() {

    this.projects.map(project => {
      project.image = this.baseUrl + project.image;
    });

  }

  public projectPressed(project: Project) {
    const modalRef = this.modalService.open(ProjectModalComponent, { size: 'lg' });
    modalRef.componentInstance.project = project;
  }

}
