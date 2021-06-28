import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo-version',
  templateUrl: './todo-version.component.html',
  styleUrls: ['./todo-version.component.css']
})
export class TodoVersionComponent implements OnInit {

  currentVersion!: string;

  @Output() version: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.currentVersion = "0.1.0"
    this.version.emit(this.currentVersion);
  }

  ngOnInit(): void {
  }

}
