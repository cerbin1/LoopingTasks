import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-organize-notes',
  templateUrl: './organize-notes.component.html',
  styleUrls: ['./organize-notes.component.css']
})
export class OrganizeNotesComponent implements OnInit {
  static assignmentName = 'Organizing Notes';
  tasksName = ['Onenote Temp',
    'Telefon Chrome',
    'Telefon notatki',
    'Todoist Skrzynka odbiorcza'];
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
