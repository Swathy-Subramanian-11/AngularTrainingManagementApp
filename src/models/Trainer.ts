export class Trainer {
  trainerId: number;
  trainerName: string;
  trainerType: string;
  trainerPhone: string;
  trainerEmail: string;


  constructor(tid: number, tname: string, ttype: string, tphone: string, temail: string) {
    this.trainerId = tid;
    this.trainerName = tname;
    this.trainerType = ttype;
    this.trainerPhone = tphone;
    this.trainerEmail = temail;

  }
}
