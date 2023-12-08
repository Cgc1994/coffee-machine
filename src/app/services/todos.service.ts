import { Injectable } from '@angular/core';
import {
  FilterStatus,
  Todo,
} from '../interfaces/todos.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
  public filterSubject = new BehaviorSubject<FilterStatus>('all');

  constructor() {
    this.loadFromLocalStorage();
    this.setupFiltering();
  }

  public getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  private setupFiltering() {
    this.filterSubject.subscribe((syze) => {
      const filteredTodos =
      syze === 'all'
          ? this.todos
          : this.todos.filter((todo) => todo.syze === syze);
      this.todosSubject.next(filteredTodos);
    });
  }

  public addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.update();
  }

  public removeTodo(todoId: Todo['id']) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.update();
  }


  private loadFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  private update() {
    this.todosSubject.next(this.todos);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
