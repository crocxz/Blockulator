import { Component, OnInit, Input } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCardModule, MatListModule, MatInputModule } from '@angular/material';
import { ListService } from '../list.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  exps: string[];

  constructor(private listService: ListService) { }

  ngOnInit() {
  console.log('subd');
  this.onListChange();
  this.getList();
    }

  onListChange() {
    this.listService.listUpdated.subscribe(
      (exps) => {
        this.exps = exps;
      }
    );
  }

  deleteAll() {
    this.exps = [];
  }

  getList(): void {
    this.exps = this.listService.getList();
  }

}
