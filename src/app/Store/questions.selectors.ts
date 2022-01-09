import { identifierName } from '@angular/compiler';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { Question } from '../models/Question';
import { State } from './questions.reducer';




export const state = createFeatureSelector<State>("questions");
export const questionsSelector = createSelector(state, (state) => {

  return {
    question: state.questions,
      }

});


const selectAllQuestions = (state: State) => state.questions

export const selectQuestions = createSelector(
 state, selectAllQuestions

  );

export const questId = (questions: Question[]) => {
  return questions
}

export const idSelector = createSelector(
  selectAllQuestions,
  questId

);

// export const selectQuestionsList = createSelector(state, (questions) => questions.questions);
// export const selectQuestionsList = createSelector(
//   state, (questions) =>  questions.questions

//   );

// console.log(idSelector)

