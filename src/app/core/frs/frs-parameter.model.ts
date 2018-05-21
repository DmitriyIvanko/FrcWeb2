export class FrsParameterModel {
  public frsId: string;
  public amMatrixStringId: string;
  public amDimentionOne: number;
  public amDimentionTwo: number;
  public amValue: string;
  public lmMatrixStringId: string;
  public lmDimentionOne: number;
  public lmDimentionTwo: number;
  public lmValue: string;
  public rmMatrixStringId: string;
  public rmDimentionOne: number;
  public rmDimentionTwo: number;
  public rmValue: string;

  constructor(obj?: Partial<FrsParameterModel>) {
    this.frsId = obj && obj.frsId || null;
    this.amMatrixStringId = obj && obj.amMatrixStringId || null;
    this.amDimentionOne = obj && obj.amDimentionOne || 0;
    this.amDimentionTwo = obj && obj.amDimentionTwo || 0;
    this.amValue = obj && obj.amValue || "";
    this.lmMatrixStringId = obj && obj.lmMatrixStringId || null;
    this.lmDimentionOne = obj && obj.lmDimentionOne || 0;
    this.lmDimentionTwo = obj && obj.lmDimentionTwo || 0;
    this.lmValue = obj && obj.lmValue || "";
    this.rmMatrixStringId = obj && obj.rmMatrixStringId || null;
    this.rmDimentionOne = obj && obj.rmDimentionOne || 0;
    this.rmDimentionTwo = obj && obj.rmDimentionTwo || 0;
    this.rmValue = obj && obj.rmValue || "";
  }
}
