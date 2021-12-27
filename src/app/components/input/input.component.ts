import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../../mock-questions';
import { Question } from '../../Questions';
import { QuestionsComponent } from '../questions/questions.component';
// import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  // @Input() QUESTIONS:
  constructor() { }

  ngOnInit(): void {
  }

  addQuestion(value:string){
    console.log(value)
  }
}
