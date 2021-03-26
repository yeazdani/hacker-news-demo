import { NgModule } from '@angular/core';
import { StoryComponent } from './story.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentDialogModule } from '../comment-dialog/comment-dialog.module';

@NgModule({
  declarations: [StoryComponent],
  imports: [
    SharedModule,
    // Material Modules
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    CommentDialogModule
  ],
  exports: [StoryComponent]
})
export class StoryModule { }
