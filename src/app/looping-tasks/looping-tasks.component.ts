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

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(data => {
      console.log(data['loopingTasks']);
      for (let i = 0; i < data['loopingTasks'].length; i++) {
        console.log('tytul:' + data['loopingTasks'][i]['title']);
        console.log('Taski:');
        for (let j = 0; j < data['loopingTasks'][i]['tasks'].length; j++) {
          console.log(data['loopingTasks'][i]['tasks'][j]);
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
