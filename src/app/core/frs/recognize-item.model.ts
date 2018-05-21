export class RecognizeItemModel {
  public frsId: string;
  public imageByteArray: string;

  constructor(obj?: Partial<RecognizeItemModel>) {
    this.frsId = obj && obj.frsId || null;
    this.imageByteArray = obj && obj.imageByteArray || "";
  }
}
