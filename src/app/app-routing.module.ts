import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  TodoVersionComponent,
} from './components/todo-version/todo-version.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: "", component: TodosComponent },
  { path: "version", component: TodoVersionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
