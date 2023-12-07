export interface Todo {
  id: string | number;
  name: string;
  syze: Syzes;
  type: CoffeeTypes,
  toppings: Array<Toppings>;
  createdAt: string | Date;
  price: number;
  orderNumber: number;
}
export interface SelectedTopping {
  name: string;
  quantity: number;
}

export interface SelectedOption {
  name: string;
  quantity: number;
}

export interface PaymentOption {
  name: string;
  value: number;
  quantity: number;
}

export type Syzes = 'small' | 'medium' | 'large';

export type CoffeeTypes = 'columbian' | 'peruvian' | 'brazilian';

export type Toppings = 'Chantilly' | 'Caramel syrup' | 'Chocolate chips' | 'Vanilla syrup';

export type FilterStatus = Syzes | 'all'

export type Orders = 'newest' | 'oldest'