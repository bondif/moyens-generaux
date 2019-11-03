import {Category} from './Category';
import {StateType} from './StateType';

export interface Tool {
  id: number;
  brand: string;
  registrationNumber: string;
  category: Category;
  state: StateType;
}
