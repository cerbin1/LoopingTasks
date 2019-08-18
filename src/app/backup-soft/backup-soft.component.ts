import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-backup-soft',
  templateUrl: './backup-soft.component.html',
  styleUrls: ['./backup-soft.component.css']
})
export class BackupSoftComponent implements OnInit {
  static assignmentName = 'Backup Soft';
  tasksName = ['OneNote Quick',
    'Google Calendar',
    'Google Chrome (Bookmarks)',
    'Google Drive (Notes)'];
  clickedTask = [false, false, false, false];

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
