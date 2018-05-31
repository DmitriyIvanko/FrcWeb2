import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import { PingMapper } from "./ping.mapper";
import { PingModel } from "./ping.model";
import { RequestHandler } from "../request/request.handler";

@Injectable()
export class PingService {
  private mapper: PingMapper;

  constructor(
    private requestHandler: RequestHandler,
  ) {
    this.mapper = new PingMapper();
  }

  public ping(): Observable<void> {
    const request = new Request({
      method: RequestMethod.Get,
      url: `api/ping/simple/`,
    });

    return this.requestHandler.request(request);
  }

  public pingWithLoad(pingModel: PingModel): Observable<PingModel> {
    const request = new Request({
      method: RequestMethod.Post,
      url: `api/ping/with-load/`,
      body: this.mapper.mapInstanceToServer(pingModel),
    });

    return this.requestHandler.request(request).pipe(
      map((response) => {
        return this.mapper.mapInstanceToClient(response);
      }));
  }
}
