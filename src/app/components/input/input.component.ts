import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addQuestion(value:string){
    console.log(value)
  }
}
