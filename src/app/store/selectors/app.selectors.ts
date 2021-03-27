import { appFeatureKey, State } from './../reducers/app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAppState = createFeatureSelector<State>(
    appFeatureKey
);

export const selectStoryIds = createSelector(
    selectAppState,
    (state: State) => state.storyIds
);
export const selectStories = createSelector(
    selectAppState,
    (state: State) => state.stories
);
export const selectComments = createSelector(
    selectAppState,
    (state: State) => state.comments
);
export const selectLoading = createSelector(
    selectAppState,
    (state: State) => state.loading
);
