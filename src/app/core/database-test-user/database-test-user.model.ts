export class DatabaseTestUserModel {
  public databaseTestUserId: string;
  public faceRecognitionSystemId: string;
  public imageId: string;

  constructor(obj?: Partial<DatabaseTestUserModel>) {
    this.databaseTestUserId = obj && obj.databaseTestUserId || null;
    this.faceRecognitionSystemId = obj && obj.faceRecognitionSystemId || null;
    this.imageId = obj && obj.imageId || null;
  }
}
