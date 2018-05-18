import { CommonModule } from "@angular/common";
import {
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";

import { RequestModule } from "./request/request.module";
import { FrsModule } from "./frs";
import { DatabaseTestUserModule } from "./database-test-user";

@NgModule({
  imports: [
    RequestModule,
    CommonModule,
    FrsModule,
    DatabaseTestUserModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }
}
