import {
  Component,
  OnInit,
} from '@angular/core';

import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem:string | null;
  todos:Todo[];
  

  constructor() {

    this.localItem = localStorage.getItem("todos");
    
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo) {
    console.log(todo)
    
    // For deleting array list
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    // Storing data in a local storage
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }

  addTodo(todo:Todo) {
    console.log(todo)
    
    // Pushing data into an array
    this.todos.push(todo);
    
    // Storing data in a local storage
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }

  toggleTodo(todo:Todo) {
    console.log(todo)
    
   // For deleting array list
   const index = this.todos.indexOf(todo);
   this.todos[index].active = !this.todos[index].active;

   // Storing data in a local storage
   localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
