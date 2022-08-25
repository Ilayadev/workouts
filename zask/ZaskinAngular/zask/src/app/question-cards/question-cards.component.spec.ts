import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCardsComponent } from './question-cards.component';

describe('QuestionCardsComponent', () => {
  let component: QuestionCardsComponent;
  let fixture: ComponentFixture<QuestionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
