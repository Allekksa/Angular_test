import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { initializeApp } from "firebase/app"

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    QuestionsComponent,
    QuestionItemComponent,
    InputComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

const firebaseConfig = {
  apiKey: "AIzaSyDhF_IZO2HbMXTRZSsRDQwAjmysrBpXaso",
  authDomain: "angulartest-2b7b1.firebaseapp.com",
  projectId: "angulartest-2b7b1",
  storageBucket: "angulartest-2b7b1.appspot.com",
  messagingSenderId: "866169035813",
  appId: "1:866169035813:web:1422aacd6f68e55221f3cc"
};

const app = initializeApp(firebaseConfig);