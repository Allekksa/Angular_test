import { Component, OnInit } from '@angular/core';
// import { Question } from '../../models/Question';
// import { QUESTIONS } from '../../mock-questions';
import { Store, select } from '@ngrx/store';
import { selectQuestions } from '../../Store/questions.selectors';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions$ = this.store$.pipe(select(selectQuestions));

  constructor(private store$: Store) {}

  ngOnInit(): void {}
}
