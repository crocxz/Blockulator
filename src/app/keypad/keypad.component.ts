import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatListModule, MatInputModule, MatGridListModule} from '@angular/material';

import * as math from 'mathjs';
import {DisplayService} from '../display.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})

export class KeypadComponent implements OnInit {
  keys: string[] = ['(', ')', 'C', '<',
                    '7', '8', '9', '+',
                    '4', '5', '6', '-',
                    '1', '2', '3', '*',
                    '0', '.', '=', '/'];

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
  }

  onClick(key: string) {
    if (key === '=') {
      try {
        // this.displayService.setResult(1);
        const res = math.eval(this.displayService.getInput()).toFixed(8);
        // round(val, dec) = Number(Math.round(value+'e'+decimals)+'e-'+decimals)
        console.log(res);
        this.displayService.setResult(res);
        this.displayService.setInput(res);

      } catch (e) {
        if (e instanceof SyntaxError) {
            this.displayService.setResult('000');
            this.displayService.clearInput();
        }
      }
    } else {
      this.displayService.appendInput(key);
      console.log(this.displayService.getInput());
    }
  }
}
