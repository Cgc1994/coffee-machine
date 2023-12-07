import { Component, Input, inject } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() todo?: Todo;
  isHovered: boolean = false;

  private todosService = inject(TodosService);

  get optionSelected() {
    return { value: this.todo?.syze, name: traductions[this.todo?.syze!] };
  }

  public removeTodo() {
    if (!this.todo) return;
    this.todosService.removeTodo(this.todo.id);
  }
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
