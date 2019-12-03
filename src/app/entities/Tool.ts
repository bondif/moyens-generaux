import {Category} from './Category';
import {StateType} from './StateType';

export interface Tool {
  label?: string;
  value?: any;
  id: number;
  brand: string;
  registrationNumber: string;
  category: Category;
  state: StateType;
}
