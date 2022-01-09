import { Component, OnInit, Input} from '@angular/core';
// import { Question } from '../../models/Question';
// import { QUESTIONS } from '../../mock-questions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectQuestions } from '../../Store/questions.selectors';

import {} from '../button/button.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {



//  questions: Question[] = QUESTIONS;
// questions$: Observable<any>
questions$ = this.store$.pipe(select(selectQuestions))

 constructor(private store$: Store) {

}

  ngOnInit(): void {
  }


}
