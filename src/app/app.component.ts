import {Component} from '@angular/core';

import {OrganizeNotesComponent} from './organize-notes/organize-notes.component';
import {BackupSoftComponent} from "./backup-soft/backup-soft.component";
import {BackupHardComponent} from "./backup-hard/backup-hard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  organizingNotesChose = false;
  organizeNotesComponentName = OrganizeNotesComponent.assignmentName;
  backupSoftChose = false;
  backupSoftComponentName = BackupSoftComponent.assignmentName;
  backupHardChose = false;
  backupHardComponentName = BackupHardComponent.assignmentName;

  chooseOrganizingNotesComponent() {
    this.organizingNotesChose = true;
  }

  chooseBackupSoftComponent() {
    this.backupSoftChose = true;
  }

  chooseBackupHardComponent() {
    this.backupHardChose = true;
  }
}
