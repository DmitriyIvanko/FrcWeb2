import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from './admin.component';
import { TestModule } from "./test";

@NgModule({
  declarations: [
    AdminComponent,
  ],
  exports: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    TestModule,
  ],
})
export class AdminModule { }
