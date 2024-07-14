export class Employee{
  empId: number;
  empName: string;
  designation: string;
  empPhone: number;
  empEmail: string;
  constructor(eid: number, ename: string, desg: string, ephone: number, email: string){
    this.empId = eid;
    this.empName = ename;
    this.designation = desg;
    this.empPhone = ephone;
    this.empEmail = email;
  }
}
