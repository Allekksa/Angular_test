import { Component, OnInit, Input } from '@angular/core';
// import { QUESTIONS } from '../../mock-questions';
import { Store } from '@ngrx/store';
import { addQuestion } from '../../Store/questions.actions';
// import { Question } from '../../models/Question';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor(private store$: Store) {}

  ngOnInit(): void {}

  addQuestion(question: string) {
    this.store$.dispatch(addQuestion({ question: question }));

    // QUESTIONS.push({
    //   id: this.randomId(),
    //   question,
    //   count:0,
    //   like: false
    // });
  }
}
