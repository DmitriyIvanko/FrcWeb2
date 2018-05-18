import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import { DatabaseTestUserMapper } from "./database-test-user.mapper";
import { DatabaseTestUserModel } from "./database-test-user.model";
import { RequestHandler } from "../request/request.handler";

@Injectable()
export class DatabaseTestUserService {
  private mapper: DatabaseTestUserMapper;

  constructor(
    private requestHandler: RequestHandler,
  ) {
    this.mapper = new DatabaseTestUserMapper();
  }

  public getList(frsId: string): Observable<DatabaseTestUserModel[]> {
    const request = new Request({
      method: RequestMethod.Get,
      url: `api/databasetestuser/get-list/?frsId=${frsId}`,
    });

    return this.requestHandler.request(request).pipe(
      map((response) => {
        return this.mapper.mapCollectionToClient(response);
      }));
  }
}
