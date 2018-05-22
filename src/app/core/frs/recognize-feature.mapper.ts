import { MapperModel } from "../utils/mapper.model";
import { RecognizeFeatureModel } from "./recognize-feature.model";

export class RecognizeFeatureMapper extends MapperModel<RecognizeFeatureModel, any> {
  public transformToServer(request: RecognizeFeatureModel): any {
    return {
      FrsId: request.frsId,
      FeatureMatrixString: request.featureMatrixString,
      DimentionOne: request.dimentionOne,
      DimentionTwo: request.dimentionTwo,
    };
  }
}
