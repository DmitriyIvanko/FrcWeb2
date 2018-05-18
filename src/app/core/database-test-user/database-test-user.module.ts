import { NgModule } from "@angular/core";

import { DatabaseTestUserService } from "./database-test-user.service";

@NgModule({
  providers: [
    DatabaseTestUserService,
  ],
})
export class DatabaseTestUserModule { }
