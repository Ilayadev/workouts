import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-cards',
  templateUrl: './question-cards.component.html',
  styleUrls: ['./question-cards.component.css']
})
export class QuestionCardsComponent implements OnInit {
 @Input()question!:any
  constructor() { }
  birthday:Date=new Date()
  ngOnInit(): void {
  }

}
