import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {storage} from './data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { HintComponent } from './hint/hint.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    HintComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [storage],
  bootstrap: [AppComponent]
})
export class AppModule { }
