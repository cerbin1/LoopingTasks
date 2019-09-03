import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-looping-tasks',
  templateUrl: './looping-tasks.component.html',
  styleUrls: ['./looping-tasks.component.css']
})
export class LoopingTasksComponent implements OnInit {
  private jsonURL = 'assets/db.json';
  private tasks;

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      const tasks = data['loopingTasks'];
      console.log(tasks);
      for (let i = 0; i < tasks.length; i++) {
        const title = tasks[i]['title'];
        this.tasks[i].title =  title;
        console.log('tytul:' + title);
        console.log('Taski:');
        const tasks = tasks[i]['tasks'];
        for (let j = 0; j < tasks.length; j++) {
          console.log(tasks[j]);
        }
      }
      // TODO: zrobić komponent looping tasks zeby byl ogolny i przyjmowal poszczegolne rodzaje zadan i taski z pliku. sprobowac powsadzac te rzeczy z jsona do zmiennych i potem w html to rozpisac
    });
  }

  ngOnInit() {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);

  }
}
