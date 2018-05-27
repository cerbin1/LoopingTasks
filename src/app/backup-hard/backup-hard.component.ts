import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-backup-hard',
  templateUrl: './backup-hard.component.html',
  styleUrls: ['./backup-hard.component.css']
})
export class BackupHardComponent implements OnInit {
  static assignmentName = 'Backup hard';
  tasksName = ['OneNote whole Notebook as doc', 'PC files Desktop', 'PC files folder Data',
    'Google Calendar', 'Google Chrome (all)', 'Google Contacts', 'Google Gmail', 'Google Drive'];
  clickedTask = [false, false, false, false, false, false, false, false];

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
