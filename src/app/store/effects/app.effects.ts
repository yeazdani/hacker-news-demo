import { falseAction, loadComments, loadCommentsSuccess, loadStories, loadStoriesSuccess, loadTopStoryIdsSuccess } from './../actions/app.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from 'src/app/services/app.service';
import { loadTopStoryIds } from '../actions/app.actions';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of, forkJoin } from 'rxjs';
import { selectComments } from '../selectors/app.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '..';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private appService: AppService
    ) { }

    loadTopStoryIds$ = createEffect(() => this.actions$.pipe(
        ofType(loadTopStoryIds),
        mergeMap(() => {
            return this.appService.getAllTopStoryIds().pipe(
                map((res: any[]) => {
                    const target = 5; // As our application needs only 5 stories
                    const ids = [];
                    if ((res.length > 0) && (res.length > target)) {
                        for (let index = 0; index < target; index++) {
                            ids.push(res[index]);
                        }
                    }
                    return loadTopStoryIdsSuccess({ data: ids });
                }),
                catchError(() => EMPTY)
            );
        })
    )
    );

    loadStories$ = createEffect(() => this.actions$.pipe(
        ofType(loadStories),
        mergeMap((action: any) => {
            const storyIds: any[] = [...action['data']];
            const requests: any[] = [];
            if (storyIds.length > 0) {
                for (let index = 0; index < storyIds.length; index++) {
                    const id = storyIds[index];
                    const request = this.appService.getStoryById(id);
                    requests.push(request);
                }
                return forkJoin(requests).pipe(
                    map((res: any[]) => {
                        return loadStoriesSuccess({ data: res });
                    }),
                    catchError(() => EMPTY)
                );
            } else {
                return of(falseAction());
            }
        })
    )
    );

    loadComments$ = createEffect(() => this.actions$.pipe(
        ofType(loadComments),
        withLatestFrom(this.store.select(selectComments)),
        mergeMap((action: any[]) => {
            const commentIds: any[] = [...action[0]['data']['kids']];
            const target = 3; // As our application needs to show only top 3 comments
            const requests: any[] = [];
            const parentId = action[0]['data']['parent'];
            const comments: any[] = action[1];
            if (commentIds.length > 0) {
                for (let index = 0; index < target; index++) {
                    const id = commentIds[index];
                    const request = this.appService.getCommentById(id);
                    requests.push(request);
                }
            }
            if (comments.length) {
                const ifExits = comments.some(item => item.parent === parentId);
                if (!ifExits) {
                    return forkJoin(requests).pipe(
                        map((comnts: any[]) => {
                            return loadCommentsSuccess(
                                {
                                    data: {
                                        text: comnts,
                                        parent: parentId
                                    }
                                }
                            );
                        }),
                        catchError(() => EMPTY)
                    );
                } else {
                    return of(falseAction());
                }
            } else {
                return forkJoin(requests).pipe(
                    map((comnts: any[]) => {
                        return loadCommentsSuccess(
                            {
                                data: {
                                    text: comnts,
                                    parent: parentId
                                }
                            }
                        );
                    }),
                    catchError(() => EMPTY)
                );
            }
        })
    )
    );
}

