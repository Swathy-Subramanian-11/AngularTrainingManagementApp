export class TrainingUser {
  userId: string;
  userPassword: string;
  userRole: string;
  constructor(uid: string, pwd: string, role: string) {
    this.userId = uid;
    this.userPassword = pwd;
    this.userRole = role;
  }
}
