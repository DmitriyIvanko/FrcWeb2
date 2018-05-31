export class PingModel {
  public load: string;

  constructor(obj?: Partial<PingModel>) {
    this.load = obj && obj.load || "";
  }
}
