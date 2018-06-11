import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatListModule, MatInputModule, MatGridListModule} from '@angular/material';

import * as math from 'mathjs';
import {DisplayService} from '../display.service';
import {ListService} from '../list.service';

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
  exps: string[];

  constructor(private displayService: DisplayService, private listService: ListService) {}

  ngOnInit() {
  }

  onClick(key: string) {
    switch (key) {
    case '=':
      try {
        let res = math.eval(this.displayService.getInput());
        const round = (num) => {
          return Math.round(num * 100000000) / 100000000;
        };
        res = round(res);
        console.log(res);
        this.displayService.setResult(res);
        this.listService.appendList(this.displayService.getInput() + ' = ' + res);
        this.displayService.setInput(res);
      } catch (e) {
        if (e instanceof SyntaxError) {
            this.displayService.setResult('Syntax Error');
            this.displayService.clearInput();
        }
      } break;

    case 'C':
      this.displayService.clearInput();
      this.displayService.clearResult();
      break;

    case '<':
      this.displayService.backspaceInput();
      break;

    default:
      this.displayService.appendInput(key);
      console.log(this.displayService.getInput());
    }
  }
}
