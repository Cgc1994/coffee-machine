import { FilterStatus, Orders, Syzes, CoffeeTypes, Toppings } from '../interfaces/todos.interfaces';
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

export const filterOptions: { name: string; value: FilterStatus }[] = [
  { value: 'all', name: traductions['all'] },
  ...formOptions,
];

export const orderOptions: { value: Orders; name: string }[] = [
  {
    value: 'newest',
    name: 'Más Nueva a Más Vieja',
  },
  {
    value: 'oldest',
    name: 'Más Vieja a Más Nueva',
  },
];
