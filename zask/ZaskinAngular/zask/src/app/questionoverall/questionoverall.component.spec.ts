import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionoverallComponent } from './questionoverall.component';

describe('QuestionoverallComponent', () => {
  let component: QuestionoverallComponent;
  let fixture: ComponentFixture<QuestionoverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionoverallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionoverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
