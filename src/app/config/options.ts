import { FilterStatus, Orders, Syzes, CoffeeTypes, Toppings } from '../interfaces/todos.interfaces';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: Syzes }[] = [
  { value: 'small', name: traductions['small'] },
  { value: 'medium', name: traductions['medium'] },
  { value: 'large', name: traductions['large'] },
];

export const coffeeTypesOptions: { name: string; value: CoffeeTypes }[] = [
  { value: 'columbian', name: traductions['columbian'] },
  { value: 'peruvian', name: traductions['peruvian'] },
  { value: 'brazilian', name: traductions['brazilian'] },
];

export const toppingsOptions: { name: string; value: Toppings }[] = [
  { value: 'Chantilly', name: traductions['chantilly'] },
  { value: 'Caramel syrup', name: traductions['caramelSyrup'] },
  { value: 'Chocolate chips', name: traductions['chocolateChips'] },
  { value: 'Vanilla syrup', name: traductions['vanillaSyrup'] },
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
