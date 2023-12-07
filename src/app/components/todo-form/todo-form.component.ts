import { Component, inject } from '@angular/core';
import { formOptions, coffeeTypesOptions, toppingsOptions } from 'src/app/config/options';
import { Todo, Syzes, CoffeeTypes, SelectedTopping, Toppings } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private todosService = inject(TodosService);

  public name: string = '';
  public newSyzes: { value: Syzes; name: string } = formOptions[0];
  public newCoffeeType: { value: CoffeeTypes; name: string } = coffeeTypesOptions[0];
  public newToppings: Array<SelectedTopping> = [];
  public syzeOptions = formOptions;
  public typeOptions = coffeeTypesOptions;
  public toppingsOptions = toppingsOptions;

  public addTodo() {
    const selectedToppingsValues: Array<Toppings> = this.newToppings.map(topping => topping.value);
    const newTodo: Todo = {
      id: Math.random(),
      name: this.name,
      syze: this.newSyzes.value,
      type: this.newCoffeeType.value,
      toppings: selectedToppingsValues,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    this.name = '';
    this.newSyzes = formOptions[0];
    this.newCoffeeType = coffeeTypesOptions[0];
    this.newToppings = [];
  }

  public changeSyze(newSyze: { value: Syzes; name: string }) {
    this.newSyzes = newSyze;
  }

  public changeType(newType: { value: CoffeeTypes; name: string }) {
    this.newCoffeeType = newType;
  }
  public changeToppings(newToppings: SelectedTopping[]) {
    this.newToppings = newToppings;
  }
}
