export class ImageModel {
  public imageId: string;
  public imageByteArray: string;
  public userId: string;
  public format: string;
  public imageName: string;

  constructor(obj?: Partial<ImageModel>) {
    this.imageId = obj && obj.imageId || null;
    this.imageByteArray = obj && obj.imageByteArray || "";
    this.userId = obj && obj.userId || null;
    this.format = obj && obj.format || null;
    this.imageName = obj && obj.imageName || "";
  }
}
