import { MapperModel } from "../utils/mapper.model";
import { FrsModel } from "./frs.model";

export class FrsMapper extends MapperModel<FrsModel, any> {
  public transformToClient(response: any): FrsModel {
    return new FrsModel({
      createdDT: response.CreatedDT && response.CreatedDT,
      faceRecognitionSystemId: response.FaceRecognitionSystemId,
      inputImageHeight: response.InputImageHeight,
      inputImageWidth: response.InputImageWidth,
      mnemonicDescription: response.MnemonicDescription,
      type: response.Type,
      typeSystemId: response.TypeSystemId,
    });
  }
}

