import { MapperModel } from "../utils/mapper.model";
import { RecognizeItemModel } from "./recognize-item.model";

export class RecognizeItemMapper extends MapperModel<RecognizeItemModel, any> {
  public transformToServer(request: RecognizeItemModel): any {
    return {
      FrsId: request.frsId,
      ImageByteArray: request.imageByteArray,
    };
  }
}
