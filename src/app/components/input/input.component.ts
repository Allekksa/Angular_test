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


  
  
    // addLike(item:any){
    //   console.log(item)
    //   if(!item.like){
    //   item.count++;
    //   item.like = true;
    //   this.allQuestionItems.sort((a, b) => (b.count) - (a.count));
    // }else{
    //   item.count--;
    //   item.like = false;
    //   this.allQuestionItems.sort((a, b) => (b.count) - (a.count));
    // }
    
    
    
  
    // filterQuestions(){
    //   this.allQuestionItems.sort((a, b) => (b.count) - (a.count));
    //   console.log(this.allQuestionItems)
    // }
  
    







}
