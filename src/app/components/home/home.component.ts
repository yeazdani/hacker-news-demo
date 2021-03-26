import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { Story } from 'src/app/models/story.model';
import { AppState } from 'src/app/store';
import { loadStories, loadTopStoryIds } from 'src/app/store/actions/app.actions';
import { selectStories, selectStoryIds } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  stories$: any;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTopStoryIds());
    this.subscriptions.add(
      this.store.select(selectStoryIds).subscribe(
        (result: any[]) => {
          if (result.length > 0) {
            this.store.dispatch(loadStories({ data: result }));
          }
        }
      )
    );
    this.stories$ = this.store.select(selectStories);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
