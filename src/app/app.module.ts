import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBadgeModule} from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { initializeApp } from "firebase/app";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects'

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
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
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