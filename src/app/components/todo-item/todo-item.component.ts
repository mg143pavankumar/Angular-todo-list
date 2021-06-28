import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // used to take some values
  @Input()
  todo: Todo = new Todo;

  // used to send some emitter
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClickDone(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }

  onCheckboxClick(todo:Todo) {
    this.todoCheckbox.emit(todo);
  }

}
