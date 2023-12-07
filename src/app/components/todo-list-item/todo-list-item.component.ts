import { Component, Input, inject } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() todo?: Todo;
  showCancelButton: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showCancelButton = false;
    }, 5000);
  }

  private todosService = inject(TodosService);

  get toppings() {
    let toppings = '';
    for (const topping of this.todo?.toppings || []) {
      if (typeof topping === 'object' && topping !== null && 'quantity' in topping) {
        if (topping['quantity'] > 0) {
          toppings += topping['quantity'] + ' ' + topping['topping'] + ' ';
        }
      }
    }
    if (toppings !== '') return 'Toppings: ' + toppings;
    return '';
  }

  public removeTodo() {
    if (!this.todo) return;
    this.todosService.removeTodo(this.todo.id);
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

}
