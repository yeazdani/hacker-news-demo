import { NgModule } from '@angular/core';
import { CommentDialogComponent } from './comment-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CommentModule } from '../comment/comment.module';


@NgModule({
  declarations: [CommentDialogComponent],
  imports: [
    SharedModule,
    CommentModule,
    MatDialogModule
  ],
  entryComponents: [
    CommentDialogComponent
  ],
  exports: [CommentDialogComponent]
})
export class CommentDialogModule { }
