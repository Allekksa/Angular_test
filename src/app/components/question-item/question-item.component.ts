import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
// import { QUESTIONS } from '../../mock-questions';
import { Store } from '@ngrx/store';

import { likeQuestion, unlikeQuestion } from '../../Store/questions.actions';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
})
export class QuestionItemComponent implements OnInit {
  @Input() question!: Question;

  constructor(private store$: Store) {}

  ngOnInit(): void {}

  addLike(question: any) {
    if (!question.like) {
      // question.count++;
      // question.like = true;
      // QUESTIONS.sort((a, b) => (b.count) - (a.count));

      this.store$.dispatch(likeQuestion({ id: question.id }));
    } else {
      // question.count--;
      // question.like = false;
      // QUESTIONS.sort((a, b) => (b.count) - (a.count));
      this.store$.dispatch(unlikeQuestion({ id: question.id }));
    }
  }
}
