import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import {
  DatabaseTestUserService,
  ImageService,
} from "../../core";

@Injectable()
export class TestService {

  constructor(
    private databaseTestUserService: DatabaseTestUserService,
    private imageService: ImageService,
  ) { }

  public startTestFrs(frsId: string): void {
    this.databaseTestUserService.getList(frsId).subscribe((resultList) => {
      this.imageService.get(resultList[0].imageId).subscribe((image) => {
        debugger;
        alert(image);
      })
      // resultList.forEach((result) => {
      //   this.imageService.get(result)
      // })
    });
  }
}
