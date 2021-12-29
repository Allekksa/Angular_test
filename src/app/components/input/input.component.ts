import { Component, OnInit, Output } from '@angular/core';
import { QUESTIONS } from '../../mock-questions';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
 QUESTIONS: any = [];

   constructor() {
   }

  ngOnInit(): void {
  }

  addQuestion(title:string){

    QUESTIONS.push({
      title,
      count:0,
      like: false
    });

  }


}
