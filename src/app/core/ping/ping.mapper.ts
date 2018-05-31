import { MapperModel } from "../utils/mapper.model";
import { PingModel } from "./ping.model";

export class PingMapper extends MapperModel<PingModel, any> {
  public transformToServer(request: PingModel): any {
    return {
      Load: request.load,
    };
  }
}
