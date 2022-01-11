import { createFeatureSelector, createSelector, props } from '@ngrx/store';
// import { Question } from '../models/Question';
import { State } from './questions.reducer';

export const state = createFeatureSelector<State>('questions');

const selectAllQuestions = (state: State) => state.questions;

export const selectQuestions = createSelector(state, selectAllQuestions);

// export const count = createSelector(selectAllQuestions, (question) => {
//   return question.filter((question) => question.count);
// });
