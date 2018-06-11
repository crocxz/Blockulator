import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DisplayService {
public input = '';
public result = 0;
public inputUpdated: EventEmitter<string> = new EventEmitter();
public resultUpdated: EventEmitter<number> = new EventEmitter();

// input functions
setInput(value) {
  this.input = value;
  this.onInputChange(this.input);
}

clearInput() {
  this.input = '';
  this.onInputChange(this.input);
}

getInput() {
  return this.input;
}

backspaceInput() {
  this.input = this.input.slice(0, -1);
  this.onInputChange(this.input);
}

appendInput(a) {
  this.input += a;
  this.onInputChange(this.input);
}

// emits event when input changes to update display
onInputChange(value) {
  this.input = value;
  this.inputUpdated.emit(this.input);
}

// result functions
setResult(value) {
  this.result = value;
  this.onResultChange(this.result);
}

clearResult() {
  this.result = 0;
  this.onResultChange(this.result);
}

getResult() {
  return this.result;
}

// emits event when result changes to update display
onResultChange(value) {
  this.result = value;
  this.resultUpdated.emit(this.result);
}

  constructor() {}
}
