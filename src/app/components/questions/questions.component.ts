import { Component, OnInit, Input} from '@angular/core';
import { Question } from '../../Questions';
import { QUESTIONS } from '../../mock-questions';

import {} from '../button/button.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
 questions: Question[] = QUESTIONS;
 
  constructor() { }

  ngOnInit(): void {
  }

  
}
