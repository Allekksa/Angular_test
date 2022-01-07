import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,

} from '@ngrx/store';

import {Action,  createReducer, on } from '@ngrx/store';
import { like, disLike } from '../Store/counter.actions';
import { environment } from '../../environments/environment';

export interface State {
  count: number;

  }

const initialState: State = {
count: 0,
};



export const counterReducer = createReducer(
  initialState,

    on(like, (state) => ({
      ...state,
      count: state.count + 1,
    })),
    on(disLike, (state) => ({
      ...state,
      count: state.count - 1,
    })),
  );

  export function reducer(state: State | undefined, action: Action) {
    return counterReducer(state, action);
  }


// export const reducers: ActionReducerMap<State> = {
// counterReducer,
// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];






