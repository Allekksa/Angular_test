
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { Question } from '../models/Question';
import { questionsReducer, State } from './questions.reducer';


export const state = createFeatureSelector<State>("questions");


// interface QuestState {
//   quest: { [id: number]: Question };
//   count: number;
// }



const selectAllQuestions = (state: State) => state.questions;
// const getQuestion = (id) => (state: QuestState) => selectQuestions(state)[id];

export const selectQuestions = createSelector(
 state, selectAllQuestions

  );









export const count = createSelector(
  selectAllQuestions,
  (question) => {
  return question.filter((question) => question.count
 )}
);




