export class Trainee {
  empId: number;
  tid: number;
  status: string;
  constructor(eid: number, tname: number, stat: string) {
    this.empId = eid;
    this.tid = tname;
    this.status = stat;
  }
}
