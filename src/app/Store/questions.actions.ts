import { createAction, props } from '@ngrx/store';

export const addQuestion = createAction('[QUESTIONS] add question',
  props<{question: string}>()
);
export const likeQuestion = createAction('[QUESTIONS] like question',
props<{id: string}>()
);

export const unlikeQuestion = createAction('[QUESTIONS] unlike question',
props<{id: string}>()
);


