import { createReducer, on } from '@ngrx/store';
import { Comment } from 'src/app/models/comment.model';
import { Story } from 'src/app/models/story.model';
import { loadCommentsSuccess, loading, loadStoriesSuccess, loadTopStoryIdsSuccess } from '../actions/app.actions';

export const appFeatureKey = 'appState';

export interface State {
    storyIds: any[];
    stories: Story[];
    comments: any[];
    loading: boolean;
}

export const initialState: State = {
    storyIds: [],
    stories: [],
    comments: [],
    loading: false
};

export const reducer = createReducer(
    initialState,
    on(loadTopStoryIdsSuccess, (state: any, action: any) => {
        return {
            ...state,
            storyIds: action.data,
        };
    }),
    on(loadStoriesSuccess, (state: any, action: any) => {
        return {
            ...state,
            stories: action.data,
        };
    }),
    on(loadCommentsSuccess, (state: any, action: any) => {
        const comments = [...state.comments];
        comments.push(action.data);
        return {
            ...state,
            comments: [...comments],
        };
    }),
    on(loading, (state: any, action: any) => {
        return {
            ...state,
            loading: action.data,
        };
    }),
);
