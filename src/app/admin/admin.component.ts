import {
  Component,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";

import {
  FrsService,
  FrsModel,
  ImageService,
} from "../core";
import {
  TestService,
  TestOnClientService,
} from "./test";
import { map } from "rxjs/operators";

@Component({
  selector: "ab-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {
  public frsList$: Observable<FrsModel[]>;
  public image$: Observable<string>;

  constructor(
    private frsService: FrsService,
    private testService: TestService,
    private testOnClientService: TestOnClientService,
    private imageService: ImageService,
  ) { }

  public ngOnInit(): void {
    this.frsList$ = this.frsService.getFrsList();
    
    this.image$ = this.imageService.get("0095b55e-8f5a-e811-9ca1-4ccc6a0f6dcb").pipe(
      map((image) => {
        return "data:image/jpg;base64," +  image.imageByteArray;
      })
    )
    
  }

  public onTestSystemClick(frsId: string): void {
    this.testService.startTestFrs(frsId);
  }

  public onTestOnClientSystemClick(frsId: string): void {
    this.testOnClientService.getParamFrs(frsId);
  }

  public onTestClick(): void {
    this.frsService.connection().subscribe((item) => {
      alert(item);
    });
  }
}
