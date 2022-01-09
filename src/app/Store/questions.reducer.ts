import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,

} from '@ngrx/store';

import {Action,  createReducer, on } from '@ngrx/store';
import * as QuestionsActions  from './questions.actions';
import { environment } from '../../environments/environment';
import { Question } from '../models/Question';


export interface State {
  questions: Question[];

}

export const initialState: State = {

questions:[]


};


function randomId () {
  return '_' + Math.random().toString(36).slice(-9);
};

function getCount() {
  return 0
}
function getFalse(){
  return false
}
function getTrue(){
  return true
}

export const questionsReducer = createReducer(
  initialState,

    on(QuestionsActions.likeQuestion, (state, { id}) => ({
      ...state,

      id:id

    })),
    on(QuestionsActions.unlikeQuestion, (state, { id }) => ({
      ...state,
      // questions: [...state.questions, {id}]
      // count: questions.count - 1,
      id:id



    })),


    on(QuestionsActions.addQuestion, (state, { question }) => ({
      ...state,
       questions: [...state.questions, {id:randomId(), question, count:getCount(), like:getFalse()}]

    })),





  );

export function reducer(state: State | undefined, action: Action) {
    return questionsReducer(state, action);
}


// export const reducers: ActionReducerMap<State> = {
// counterReducer,
// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];






