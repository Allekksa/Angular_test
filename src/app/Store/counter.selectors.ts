import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './/counter.reducer';

export const state = createFeatureSelector<State>("liked");
export const count = createSelector(state, (state) => state.count);
