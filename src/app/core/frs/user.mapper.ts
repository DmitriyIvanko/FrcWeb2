import { MapperModel } from "../utils/mapper.model";
import { UserModel } from "./user.model";

export class UserMapper extends MapperModel<UserModel, any> {
  public transformToClient(response: any): UserModel {
    return new UserModel({
      userId: response.UserId,
      username: response.Username,
    });
  }
}
