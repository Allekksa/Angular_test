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
     
  addLike(item:any){
    console.log(item)
    if(!item.like){
    item.count++;
    item.like = true;
    }else{
    item.count--;
    item.like = false;
    }
  
  }
  


}
