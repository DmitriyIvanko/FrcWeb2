export class RecognizeFeatureModel {
  public frsId: string;
  public featureMatrixString: string;
  public dimentionOne: number;
  public dimentionTwo: number;

  constructor(obj?: Partial<RecognizeFeatureModel>) {
    this.frsId = obj && obj.frsId || null;
    this.featureMatrixString = obj && obj.featureMatrixString || "";
    this.dimentionOne = obj && obj.dimentionOne || 0;
    this.dimentionTwo = obj && obj.dimentionTwo || 0;
  }
}
