import {Component} from '@angular/core';

import {OrganizeNotesComponent} from './organize-notes/organize-notes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  organizingNotesChose = false;
  organizeNotesComponentName = OrganizeNotesComponent.assignmentName;

  chooseOrganizingNotesComponent() {
    this.organizingNotesChose = true;
  }
}
