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
  public newSyzes: { value: Syzes; name: string, price: number } = formOptions[0];
  public newCoffeeType: { value: CoffeeTypes; name: string, price: number } = coffeeTypesOptions[0];
  public newToppings: Array<SelectedTopping> = [];
  public syzeOptions = formOptions;
  public typeOptions = coffeeTypesOptions;
  public toppingsOptions = toppingsOptions;

  public addTodo() {
    const selectedToppings: any[] = this.toppingsOptions.map(topping => ({
      topping: topping.name,
      quantity: topping.quantity,
    }));
    let toppingsPrice = 0;
    this.toppingsOptions.forEach(topping => {
      toppingsPrice += topping.price * topping.quantity;
    });
    const finalPrice = this.newSyzes.price + this.newCoffeeType.price + toppingsPrice;
    const newTodo: Todo = {
      id: Math.random(),
      name: this.name,
      syze: this.newSyzes.value,
      type: this.newCoffeeType.value,
      toppings: selectedToppings,
      createdAt: new Date(),
      price: finalPrice
    };

    this.todosService.addTodo(newTodo);

    this.name = '';
    this.newSyzes = formOptions[0];
    this.newCoffeeType = coffeeTypesOptions[0];
    this.newToppings = [];
  }

  public changeSyze(newSyze: { value: Syzes; name: string, price: number }) {
    this.newSyzes = newSyze;
  }

  public changeType(newType: { value: CoffeeTypes; name: string, price: number }) {
    this.newCoffeeType = newType;
  }
  public changeToppings(newToppings: SelectedTopping[]) {
    this.newToppings = newToppings;
  }
}
