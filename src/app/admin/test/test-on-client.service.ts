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
  ImageModel,
  RecognizeItemModel,
  UserModel,
  FrsParameterModel,
} from "../../core";

// to do: may be need for read file:
// var BASE64_MARKER = ';base64,';

declare var require: any;

@Injectable()
export class TestOnClientService {
  // kind of store:
  private frsId: string;
  private indexCurrent: number;
  private indexMax: number;
  private databaseTestUserList: DatabaseTestUserModel[];
  private startDtList: Date[] = [];
  private endDtList: Date[] = [];
  private correctList: number[] = [];
  private frsParameter: FrsParameterModel;
  private frsAverageMatrix: math.Matrix;
  // end kind of store:

  private subscription: Subscription;
  public jpeg: any; // to do: add typings;
  public math: any;

  constructor(
    private databaseTestUserService: DatabaseTestUserService,
    private imageService: ImageService,
    private frsService: FrsService,
  ) {
    this.subscription = new Subscription();
    this.jpeg = require("nanojpeg");
    this.math = require("mathjs");
  }

  public getParamFrs(frsId: string): void {
    this.frsId = frsId;
    this.subscription.add(
      this.frsService.getFrsParamenter(frsId).subscribe((frsParameter) => {
        this.frsParameter = frsParameter;
        this.startTestFrs();
      }));
  }

  private startTestFrs(): void {
    this.subscription.add(
      this.databaseTestUserService.getList(this.frsId).subscribe((databaseTestUserList) => {
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

        var res = this.convertDataURIToBinary(image.imageByteArray);
        var imageJpeg = this.jpeg.decodeJPEG(res);
        var greyArray = this.imageJpeg2greyArray(imageJpeg);
        var imageMatrix = this.greyArray2Matrix(greyArray);
        debugger;
        this.calcFeature(image);
        // const recognizeItem = new RecognizeItemModel({
        //   frsId: this.frsId,
        //   imageByteArray: image.imageByteArray,
        // });
        // this.frsService.recognize(recognizeItem).subscribe((user) => {
        //   this.endDtList[this.indexCurrent] = new Date();
        //   this.correctList[this.indexCurrent] = user.userId === image.userId ? 1 : 0;
        //   this.increment();
        // });
      });
  }

  private imageJpeg2greyArray(imageJpeg: any): number[] {
    const rgbDim = 3;
    var result = [];
    for (let i = 0; i < imageJpeg.rgb.length; i = i + rgbDim) {
      // to do: не очень здорого делить в массиве, но пока не вижу быстрой альтернативы:
      result[i / 3] = imageJpeg.rgb[i];
    }
    return result;
  }

  private greyArray2Matrix(greyArray: number[]): any {
    let matrixArray: number[][] = [];
    for (let i = 0; i < 112; i++) {
      matrixArray[i] = [];
      for (let j = 0; j < 92; j++) {
        matrixArray[i][j] = greyArray[i * 92 + j];
     }
    }
    return this.math.transpose(this.math.matrix(matrixArray));
  }

  private calcFeature(image: ImageModel): void {

  }

  private convertDataURIToBinary(dataURI) {
   // to do: may be need for read file;
   //  let base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
   //  let base64 = dataURI.substring(base64Index);
    let raw = window.atob(dataURI);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
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
