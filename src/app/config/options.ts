import { Syzes, CoffeeTypes, Toppings } from '../interfaces/todos.interfaces';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: Syzes, price: number }[] = [
  { value: 'small', name: traductions['small'], price: 2 },
  { value: 'medium', name: traductions['medium'], price: 3 },
  { value: 'large', name: traductions['large'], price: 3.5 },
];

export const coffeeTypesOptions: { name: string; value: CoffeeTypes, price: number }[] = [
  { value: 'columbian', name: traductions['columbian'], price: 5 },
  { value: 'peruvian', name: traductions['peruvian'], price: 6.5 },
  { value: 'brazilian', name: traductions['brazilian'], price: 6 },
];

export const toppingsOptions: { name: string; value: Toppings, quantity: number, price: number }[] = [
  { value: 'Chantilly', name: traductions['chantilly'], quantity: 0, price: 4 },
  { value: 'Caramel syrup', name: traductions['caramelSyrup'], quantity: 0, price: 2 },
  { value: 'Chocolate chips', name: traductions['chocolateChips'], quantity: 0, price: 1 },
  { value: 'Vanilla syrup', name: traductions['vanillaSyrup'], quantity: 0, price: 2 },
];

export const paymentOptions: { name: string; value: number, quantity: number}[] = [
  { name: '1€ coin', value: 1, quantity: 0 },
  { name: '2€ coin', value: 2, quantity: 0 },
  { name: '5€ bill', value: 5, quantity: 0 },
  { name: '10€ bill', value: 10, quantity: 0 },
];