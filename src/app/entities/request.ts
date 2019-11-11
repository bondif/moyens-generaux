import {Category} from './Category';
import {Employee} from './employee';
import {Assignment} from './Assignment';

export interface  Request {
  id:number;
  isAccepted:number;
  category:Category;
  employee:Employee;
  assignment:Assignment;
  comment:string;
  startDate:Date;
  endDate:Date;
}

