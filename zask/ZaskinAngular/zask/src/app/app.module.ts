import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TagsComponent } from './tags/tags.component';
import { TitleComponent } from './title/title.component';
import { QuestionoverallComponent } from './questionoverall/questionoverall.component';
import { QuestionCardsComponent } from './question-cards/question-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagsComponent,
    TitleComponent,
    QuestionoverallComponent,
    QuestionCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
