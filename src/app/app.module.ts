import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OrganizeNotesComponent} from './organize-notes/organize-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizeNotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
