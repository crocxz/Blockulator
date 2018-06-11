import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KeypadComponent } from './keypad/keypad.component';
import { HistoryComponent } from './history/history.component';
import { DisplayComponent } from './display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatGridListModule } from '@angular/material';
import { DisplayService } from 'src/app/display.service';
import { ListService } from 'src/app/list.service';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    HistoryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatButtonModule, MatCardModule, MatGridListModule,
   MatInputModule, BrowserAnimationsModule, MatIconModule, MatListModule
  ],
  providers: [DisplayService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
