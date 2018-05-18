export class FrsModel {
  public createdDT: Date;
  public faceRecognitionSystemId: string;
  public inputImageHeight: number;
  public inputImageWidth: number;
  public mnemonicDescription: string;
  public type: string;
  public typeSystemId: string;

  constructor(obj?: Partial<FrsModel>) {
    this.createdDT = obj && obj.createdDT !== undefined ? new Date(obj.createdDT) : new Date();
    this.faceRecognitionSystemId = obj && obj.faceRecognitionSystemId || null;
    this.inputImageHeight = obj && obj.inputImageHeight || null;
    this.inputImageWidth = obj && obj.inputImageWidth || null;
    this.mnemonicDescription = obj && obj.mnemonicDescription || "";
    this.type = obj && obj.type || "";
    this.typeSystemId = obj && obj.typeSystemId || null;
  }
}
