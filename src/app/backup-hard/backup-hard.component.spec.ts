import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupHardComponent } from './backup-hard.component';

describe('BackupHardComponent', () => {
  let component: BackupHardComponent;
  let fixture: ComponentFixture<BackupHardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupHardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
