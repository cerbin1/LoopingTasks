import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OrganizeNotesComponent} from './organize-notes/organize-notes.component';
import { BackupSoftComponent } from './backup-soft/backup-soft.component';
import { BackupHardComponent } from './backup-hard/backup-hard.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizeNotesComponent,
    BackupSoftComponent,
    BackupHardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
