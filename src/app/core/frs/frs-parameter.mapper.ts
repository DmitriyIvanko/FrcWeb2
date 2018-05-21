import { MapperModel } from "../utils/mapper.model";
import { FrsParameterModel } from "./frs-parameter.model";

export class FrsParameterMapper extends MapperModel<FrsParameterModel, any> {
  public transformToClient(response: any): FrsParameterModel {
    return new FrsParameterModel({
      amDimentionOne: response.AverageImageMatrix.DimentionOne,
      amDimentionTwo: response.AverageImageMatrix.DimentionTwo,
      amMatrixStringId: response.AverageImageMatrix.MatrixStringId,
      amValue: response.AverageImageMatrix.Value,
      frsId: response.FrsId,
      lmDimentionOne: response.LeftMatrix.DimentionOne,
      lmDimentionTwo: response.LeftMatrix.DimentionTwo,
      lmMatrixStringId: response.LeftMatrix.MatrixStringId,
      lmValue: response.LeftMatrix.Value,
      rmDimentionOne: response.RightMatrix.DimentionOne,
      rmDimentionTwo: response.RightMatrix.DimentionTwo,
      rmMatrixStringId: response.RightMatrix.MatrixStringId,
      rmValue: response.RightMatrix.Value,
    });
  }
}
