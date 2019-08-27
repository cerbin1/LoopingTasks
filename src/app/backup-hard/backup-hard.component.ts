import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-backup-hard',
  templateUrl: './backup-hard.component.html',
  styleUrls: ['./backup-hard.component.css']
})
export class BackupHardComponent implements OnInit {
  static assignmentName = 'Backup Hard';
  tasksName = ['OneNote whole notebook as doc',
    'Folder Documents (Ubuntu)',
    'Folder Dane (Dysk D)',
    'Chrome Passwords Export',
    'Google Calendar',
    'Google Chrome (all)',
    'Google Contacts',
    'Google Gmail',
    'Google Drive'];
  clickedTask = [false, false, false, false, false, false, false, false, false];

  constructor() {
  }

  ngOnInit() {
  }

  changeTaskStatus(index) {
    this.clickedTask[index] = !this.clickedTask[index];
  }

  getNumberOfClickedTasks(): number {
    return this.clickedTask.filter(status => status === true).length;
  }

  getTasksCompletionStatus() {
    return this.getNumberOfClickedTasks() + '/' + this.clickedTask.length;
  }

  allTasksClicked(): boolean {
    return this.getNumberOfClickedTasks() === this.clickedTask.length;
  }
}
