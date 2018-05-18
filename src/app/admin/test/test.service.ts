import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import { DatabaseTestUserService } from "../../core";

@Injectable()
export class TestService {

  constructor(
    private databaseTestUserService: DatabaseTestUserService,
  ) { }

  public startTestFrs(frsId: string): void {
    this.databaseTestUserService.getList(frsId).subscribe((result) => {
      debugger;
      alert(result);
    });
  }
}
