export class RecognizeItemModel {
  public frsId: string;
  public imageByteArray: string;
  public systemEtalonCount: number;

  constructor(obj?: Partial<RecognizeItemModel>) {
    this.frsId = obj && obj.frsId || null;
    this.imageByteArray = obj && obj.imageByteArray || "";
    this.systemEtalonCount = obj && obj.systemEtalonCount || 0;
  }
}
