export class Training {
  trainingId: number = 0;
  technologyId: number = 0;
  trainerId: number = 0;
  startDate = new Date();
  endDate = new Date();
  /*
  public get TrainingId(): number {
    return this.trainingId;
  }
  public set TrainingId(value: number) {
    this.trainingId = value;
  }

  public get TechnologyId(): number {
    return this.technologyId;
  }
  public set TechnologyId(value: number) {
    this.technologyId = value;
  }

  public get TrainerId(): number {
    return this.trainerId;
  }
  public set TrainerId(value: number) {
    this.trainerId = value;
  }

  public get StartDate(): Date {
    return this.startDate;
  }
  public set StartDate(value: Date) {
    this.startDate = value;
  }

  public get EndDate(): Date {
    return this.endDate;
  }
  public set EndDate(value: Date) {
    this.endDate = value;
  }
  */
  constructor(trngId: number, techId: number, trnrId: number, sDate: Date, eDate: Date) {
    this.trainingId = trngId;
    this.technologyId = techId;
    this.trainerId = trnrId;
    this.startDate = sDate;
    this.endDate = eDate;
  }
}
