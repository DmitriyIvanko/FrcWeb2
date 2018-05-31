import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
})
export class AdminModule { }
