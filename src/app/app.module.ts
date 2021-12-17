import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    QuestionsComponent,
    QuestionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
