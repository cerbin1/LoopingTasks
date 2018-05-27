import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeNotesComponent } from './organize-notes.component';

describe('OrganizeNotesComponent', () => {
  let component: OrganizeNotesComponent;
  let fixture: ComponentFixture<OrganizeNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizeNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
