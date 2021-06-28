import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;

  // used to send some emitter
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 123,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo);

  }

}
