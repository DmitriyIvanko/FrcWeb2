import { NgModule } from "@angular/core";

import { TestService } from "./test.service";
import { TestOnClientService } from "./test-on-client.service";

@NgModule({
  providers: [
    TestService,
    TestOnClientService,
  ]
})
export class TestModule { }
