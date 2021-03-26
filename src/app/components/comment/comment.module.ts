import { NgModule } from '@angular/core';
import { CommentComponent } from './comment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [CommentComponent],
  imports: [
    SharedModule,
    MatDividerModule
  ],
  exports: [CommentComponent]
})
export class CommentModule { }
