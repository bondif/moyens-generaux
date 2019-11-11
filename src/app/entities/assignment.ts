import {Employee} from './employee';
import {Tool} from './Tool';

export interface Assignment {
  id: number;
  isAccepted: number;
  tool: Tool;
  employee: Employee;
  request: Request;
  comment: string;
  assignmentDate: Date;
  endDate: Date;
}


