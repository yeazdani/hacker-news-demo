import { createAction, props } from '@ngrx/store';
import { Story } from 'src/app/models/story.model';

/** ........... Story .......... */
export const loadTopStoryIds = createAction(
    '[Home Component] Load Top Story Ids'
);
export const loadTopStoryIdsSuccess = createAction(
    '[Effect] Load Top Story Ids Success',
    props<{ data: any }>()
);
export const loadStories = createAction(
    '[Home Component] Load Stories',
    props<{ data: number[] }>()
);
export const loadStoriesSuccess = createAction(
    '[Effect] Load Stories Success',
    props<{ data: Story[] }>()
);

/** ........... Comments .......... */
export const loadComments = createAction(
    '[Comment Dialog] Load Comments',
    props<{ data: number[] }>()
);
export const loadCommentsSuccess = createAction(
    '[Effect] Load Comments Success',
    props<{ data: any }>()
);

/** ........... Loading.......... */
export const loading = createAction(
    '[Loading] Loading Action',
    props<{ data: boolean }>()
);


/** ........... False Action .......... */
export const falseAction = createAction(
    '[False Action] False Action',
);
