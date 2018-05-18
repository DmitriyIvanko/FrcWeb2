import { MapperModel } from "../utils/mapper.model";
import { ImageModel } from "./image.model";

export class ImageMapper extends MapperModel<ImageModel, any> {
  public transformToClient(response: any): ImageModel {
    return new ImageModel({
      format: response.Format,
      imageByteArray: response.ImageByteArray,
      imageId: response.ImageId,
      imageName: response.ImageName,
      userId: response.UserId,
    });
  }
}

