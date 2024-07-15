export class Technology {
  technologyId: number;
  technologyName: string;
  technologyType: string;
  constructor(techId: number, techName: string, techType: string) {
    this.technologyId = techId;
    this.technologyName = techName;
    this.technologyType = techType;
  }
}
