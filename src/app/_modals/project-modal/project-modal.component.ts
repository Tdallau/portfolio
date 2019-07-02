import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  @Input() project: Project;
  private player: any;
  private ytEvent: any;
  public hasVideo = false;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    if (this.project.video !== undefined) {
      this.hasVideo = true;
    }
  }

  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }

}
