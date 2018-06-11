import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatListModule, MatInputModule } from '@angular/material';

import {DisplayService} from '../display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  input = '';
  result = 0;

  constructor(private displayService: DisplayService) {}

  ngOnInit() {
  console.log('subd');
  this.onInputChange();
  this.onResultChange();
    }

  onInputChange() {
    this.displayService.inputUpdated.subscribe(
      (input) => {
        this.input = input;
      }
    );
  }

  onResultChange() {
    this.displayService.resultUpdated.subscribe(
      (result) => {
        this.result = result;
      }
    );
  }

  getInput(): void {
    this.input = this.displayService.getInput();
  }

  getResult(): void {
      this.result = this.displayService.getResult();
  }
}
