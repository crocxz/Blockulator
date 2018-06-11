import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  public exps: string[] = ['2+2=4', 'quickmaths'];
  public listUpdated: EventEmitter<any> = new EventEmitter();

  clearList() {
    this.exps = [];
    this.onListChange(this.exps);
  }
  getList() {
    return this.exps;
  }
  appendList(item: string) {
    this.exps.push(item);
    this.onListChange(this.exps);
  }
  onListChange(value) {
    this.exps = value;
    this.listUpdated.emit(this.exps);
    console.log('l emit ' + this.exps);
  }
  constructor() { }
}
