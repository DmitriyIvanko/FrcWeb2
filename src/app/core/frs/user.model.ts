export class UserModel {
  public userId: string;
  public username: string;

  constructor(obj?: Partial<UserModel>) {
    this.userId = obj && obj.userId || null;
    this.username = obj && obj.username || "";
  }
}
