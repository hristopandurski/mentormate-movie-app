import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedCharacterTextareaComponent } from './limited-character-textarea.component';

describe('LimitedCharacterTextareaComponent', () => {
  let component: LimitedCharacterTextareaComponent;
  let fixture: ComponentFixture<LimitedCharacterTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedCharacterTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedCharacterTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
