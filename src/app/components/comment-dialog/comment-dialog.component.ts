import { selectComments } from './../../store/selectors/app.selectors';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { loadComments } from 'src/app/store/actions/app.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit, OnDestroy {
  comments: any;
  private subscriptions = new Subscription();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadComments({ data: this.data }));
    this.subscriptions.add(
      this.store.select(selectComments).subscribe((comments: any[]) => {
        if (comments.length > 0) {
          this.comments = comments.find(item => item.parent === this.data.parent);
        }
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
