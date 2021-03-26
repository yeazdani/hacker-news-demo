import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

import * as fromAppReducer from './reducers/app.reducer';

export interface AppState {
  [fromAppReducer.appFeatureKey]: fromAppReducer.State;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAppReducer.appFeatureKey]: fromAppReducer.reducer,
  router: routerReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
