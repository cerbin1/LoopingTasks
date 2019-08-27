import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopingTasksComponent } from './looping-tasks.component';

describe('LoopingTasksComponent', () => {
  let component: LoopingTasksComponent;
  let fixture: ComponentFixture<LoopingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
