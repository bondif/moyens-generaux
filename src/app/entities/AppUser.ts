import {Employee} from './employee';

export interface AppUser {
  employee:Employee;
  id:number;
  username:string;
  password:string;
  actived:string;
  roles:AppRole;
}
