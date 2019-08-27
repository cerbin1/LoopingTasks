import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupSoftComponent } from './backup-soft.component';

describe('BackupSoftComponent', () => {
  let component: BackupSoftComponent;
  let fixture: ComponentFixture<BackupSoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupSoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
