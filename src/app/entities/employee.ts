import {Function} from './Function';
import {Department} from './department';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  registrationNumber: string;
  cin: string;
  function:Function;
  department:Department;
}
