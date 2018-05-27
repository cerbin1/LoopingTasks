import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-organize-notes',
  templateUrl: './organize-notes.component.html',
  styleUrls: ['./organize-notes.component.css']
})
export class OrganizeNotesComponent implements OnInit {
  static taskName = 'Organizing Notes';
  elements = ['Sticky notes', 'Google Drive', 'Phone notes', 'Phone Chrome Tabs', 'Empty OneNote Temp'];
  statuses = [false, false, false, false, false];

  constructor() {
  }

  ngOnInit() {
  }

  changeStatusOfElement(index) {
    this.statuses[index] = !this.statuses[index];
  }
}
