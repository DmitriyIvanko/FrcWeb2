import { Injectable } from "@angular/core";
import {
  Http,
  Request,
  Response,
} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AppSettings } from "../../app.settings";

@Injectable()
export class RequestHandler {
  constructor(
    private http: Http,
  ) { }

  public request(request: Request): Observable<any> {
    request.url = AppSettings.connectionString + request.url;

    return this.http.request(request).pipe(
      map((response) => {
        return response.json();
      }));
  }
}
