import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import { RequestHandler } from "../request/request.handler";
import { FrsParameterMapper } from "./frs-parameter.mapper";
import { FrsParameterModel } from "./frs-parameter.model";
import { FrsMapper } from "./frs.mapper";
import { FrsModel } from "./frs.model";
import { RecognizeItemMapper } from "./recognize-item.mapper";
import { RecognizeItemModel } from "./recognize-item.model";
import { UserModel } from "./user.model";
import { UserMapper } from "./user.mapper";

@Injectable()
export class FrsService {
  private frsMapper: FrsMapper;
  private frsParameterMapper: FrsParameterMapper;
  private recognizeItemMapper: RecognizeItemMapper;
  private userMapper: UserMapper;

  constructor(
    private requestHandler: RequestHandler,
  ) {
    this.frsMapper = new FrsMapper();
    this.frsParameterMapper = new FrsParameterMapper();
    this.recognizeItemMapper = new RecognizeItemMapper();
    this.userMapper = new UserMapper();
  }

  public getFrsList(): Observable<FrsModel[]> {
    const request = new Request({
      method: RequestMethod.Get,
      url: "api/frs/get-frs-list",
    });

    return this.requestHandler.request(request).pipe(
      map((response) => {
        return this.frsMapper.mapCollectionToClient(response);
      }));
  }

  public getFrsParamenter(frsId: string): Observable<FrsParameterModel> {
    const request = new Request({
      method: RequestMethod.Get,
      url: `api/frs/get-frs-parameter/?frsId=${frsId}`,
    });

    return this.requestHandler.request(request).pipe(
      map((response) => {
        return this.frsParameterMapper.mapInstanceToClient(response);
      }));
  }

  public recognize(recognizeItem: RecognizeItemModel): Observable<UserModel> {
    const request = new Request({
      method: RequestMethod.Post,
      url: "api/frs/recognize",
      body: this.recognizeItemMapper.transformToServer(recognizeItem),
    });

    return this.requestHandler.request(request).pipe(
      map((response) => {
        return this.userMapper.mapInstanceToClient(response);
      }));
  }

  public connection(): Observable<any> {
    const request = new Request({
      method: RequestMethod.Get,
      url: "api/test/ping",
    });

    return this.requestHandler.request(request);
  }
}
