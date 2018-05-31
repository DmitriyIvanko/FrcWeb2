import { NgModule } from "@angular/core";

import { PingService } from "./ping.service";

@NgModule({
  providers: [
    PingService,
  ],
})
export class PingModule { }
