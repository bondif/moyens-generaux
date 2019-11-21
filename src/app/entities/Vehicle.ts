import {Tool} from './Tool';

export interface Vehicle extends Tool {
  id: number;
  vin: string;
  horseCount: number;
  model: string;
}
