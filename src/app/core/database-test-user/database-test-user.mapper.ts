import { MapperModel } from "../utils/mapper.model";
import { DatabaseTestUserModel } from "./database-test-user.model";

export class DatabaseTestUserMapper extends MapperModel<DatabaseTestUserModel, any> {
  public transformToClient(response: any): DatabaseTestUserModel {
    return new DatabaseTestUserModel({
      databaseTestUserId: response.DatabaseTestUserId,
      faceRecognitionSystemId: response.FaceRecognitionSystemId,
      imageId: response.ImageId,
    });
  }
}

