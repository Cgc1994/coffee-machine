import { Component, inject } from '@angular/core';
import { formOptions, coffeeTypesOptions, toppingsOptions, paymentOptions } from 'src/app/config/options';
import { Todo, Syzes, CoffeeTypes, SelectedTopping, Toppings, PaymentOption } from 'src/app/interfaces/todos.interfaces';
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
  public paymentChoice: Array<PaymentOption> = [];
  public syzeOptions = formOptions;
  public typeOptions = coffeeTypesOptions;
  public toppingsOptions = toppingsOptions;
  public paymentOptions = paymentOptions;
  public isPaying: boolean = false;
  public isPaid: boolean = false;
  public disabledForm: boolean = false;
  public finalPrice: number = 0;
  public paid: number = 0;
  public orderNumber: number = 1;
  public refundChange: number = 0;

  public payment() {
    if (this.name !== '') {
      let toppingsPrice = 0;
      this.toppingsOptions.forEach(topping => {
        toppingsPrice += topping.price * topping.quantity;
      });
      this.finalPrice = this.newSyzes.price + this.newCoffeeType.price + toppingsPrice;
      this.isPaying = true;
      this.disabledForm = true;
    } else {
      alert('Type your name first');
    }
    
  }
  public addTodo() {
    const selectedToppings: any[] = this.toppingsOptions.map(topping => ({
      topping: topping.name,
      quantity: topping.quantity,
    }));
    const newTodo: Todo = {
      id: Math.random(),
      name: this.name,
      syze: this.newSyzes.value,
      type: this.newCoffeeType.value,
      toppings: selectedToppings,
      createdAt: new Date(),
      price: this.finalPrice,
      orderNumber: this.orderNumber,
    };

    this.refundChange = this.paid - this.finalPrice;

    this.todosService.addTodo(newTodo);
    this.isPaying = false;
    this.disabledForm = false;
    this.finalPrice = 0;
    this.paid = 0;
    this.orderNumber +=1;

    this.name = '';
    this.newSyzes = formOptions[0];
    this.newCoffeeType = coffeeTypesOptions[0];
    this.newToppings = [];
    this.paymentChoice = [];
    this.isPaid = true;
  }

  public closePopup() {
    this.isPaid = false;
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

  public changePayedAmount(paymentChoice: PaymentOption[]) {
    this.paid = 0;
    for (const item of paymentOptions) {
      this.paid += (item.value * item.quantity);
    }
  }
}
