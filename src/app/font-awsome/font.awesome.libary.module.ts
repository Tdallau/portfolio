import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class FontAwesomeLibaryModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub, 
      faLinkedinIn, 
      faHtml5, 
      faCss3Alt, 
      faJs, 
      faAngular, 
      faReact, 
      faPython, 
      faNpm, 
      faCheck, 
      faFile, 
      faDocker
    );
  }
}
