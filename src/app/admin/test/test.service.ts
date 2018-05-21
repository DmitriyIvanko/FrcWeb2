import { Injectable } from "@angular/core";
import {
  Observable,
  BehaviorSubject,
  Subscription,
} from "rxjs";
import {
  map,
  switchMap,
  combineLatest,
} from "rxjs/operators";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import {
  DatabaseTestUserService,
  DatabaseTestUserModel,
  FrsService,
  ImageService,
  RecognizeItemModel,
  UserModel,
} from "../../core";

@Injectable()
export class TestService {
  // kind of store:
  private frsId: string;
  private indexCurrent: number;
  private indexMax: number;
  private databaseTestUserList: DatabaseTestUserModel[];
  private startDtList: Date[] = [];
  private endDtList: Date[] = [];
  private correctList: number[] = [];
  // end kind of store:

  private subscription: Subscription;

  constructor(
    private databaseTestUserService: DatabaseTestUserService,
    private imageService: ImageService,
    private frsService: FrsService,
  ) {
    this.subscription = new Subscription();
  }

  public startTestFrs(frsId: string): void {
    this.frsId = frsId;

    this.subscription.add(
      this.databaseTestUserService.getList(frsId).subscribe((databaseTestUserList) => {
        this.indexCurrent = 0;
        this.databaseTestUserList = databaseTestUserList;
        this.indexMax = databaseTestUserList.length;
        this.testNext();
      }));
  }

  private testNext(): void {
    this.imageService.get(this.databaseTestUserList[this.indexCurrent].imageId)
      .subscribe((image) => {
        this.startDtList[this.indexCurrent] = new Date();
        const recognizeItem = new RecognizeItemModel({
          frsId: this.frsId,
          imageByteArray: image.imageByteArray,
        });
        this.frsService.recognize(recognizeItem).subscribe((user) => {
          this.endDtList[this.indexCurrent] = new Date();
          this.correctList[this.indexCurrent] = user.userId === image.userId ? 1 : 0;
          this.increment();
        });
      });
  }

  private increment(): void {
    if (this.indexCurrent === this.databaseTestUserList.length - 1) {
      const correct = this.correctList.reduce((a, b) => a + b, 0);
      const performance = this.indexMax === 0 ? 0 : correct / this.indexMax * 100;
      const result = [];
      for (let i = 0; i < this.indexMax; i++) {
        result[i] = this.endDtList[i].getTime() - this.startDtList[i].getTime();
      }
      debugger;

      const totalMs = result.reduce((a, b) => a + b, 0);
      alert("correct/total: " + performance + ". Total ms: " + totalMs);

    } else {
      this.indexCurrent = this.indexCurrent + 1;
      this.testNext();
    }
  }
}
