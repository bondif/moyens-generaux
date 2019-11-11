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


}


  //
  // private Short isAccepted;
  // private String comment;
  // private Date startDate;
  // private Date endDate;
