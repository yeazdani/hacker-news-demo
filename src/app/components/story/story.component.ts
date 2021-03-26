import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input('story') story: any;
  @Input('index') index: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }
  openCommentDialog(): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        parent: this.story.id,
        kids: this.story.kids
      }
    });
  }
}


