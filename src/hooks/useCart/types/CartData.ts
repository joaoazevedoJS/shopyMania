import { Products } from '../../../models/Products';

export interface CartData extends Products {
  amount: number;
}
