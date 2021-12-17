import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../Questions';



@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {
@Input() question!: Question;

  constructor() {
  
  }
  ngOnInit(): void {
  
  }
  toggle(){
    console.log('toggle')
  }


}
