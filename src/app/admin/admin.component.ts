import {
  Component,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";

import {
  FrsService,
  FrsModel,
} from "../core";
import { TestService } from "./test";

@Component({
  selector: "ab-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {
  public frsList$: Observable<FrsModel[]>;

  constructor(
    private frsService: FrsService,
    private testService: TestService,
  ) { }

  public ngOnInit(): void {
    this.frsList$ = this.frsService.getFrsList();
  }

  public onTestSystemClick(frsId: string): void {
    this.testService.startTestFrs(frsId);
  }
}
