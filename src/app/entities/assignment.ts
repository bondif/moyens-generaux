import {Employee} from './employee';
import {Tool} from './Tool';
import {Request} from './request';

export interface Assignment {
  id: number;
  tool: Tool;
  request: Request;
}


