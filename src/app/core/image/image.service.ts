import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import { ImageMapper } from "./image.mapper";
import { ImageModel } from "./image.model";
import { RequestHandler } from "../request/request.handler";

@Injectable()
export class ImageService {
  private mapper: ImageMapper;

  constructor(
    private requestHandler: RequestHandler,
  ) {
    this.mapper = new ImageMapper();
  }

  public get(imageId: string): Observable<ImageModel> {
    const request = new Request({
      method: RequestMethod.Get,
      url: `api/image/get/?imageId=${imageId}`,
    });

    return this.requestHandler.request(request).pipe(
      map((response) => {
        return this.mapper.mapInstanceToClient(response);
      }));
  }
}
