import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class SharedModule { }
