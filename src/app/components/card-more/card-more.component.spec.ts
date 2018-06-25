import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMoreComponent } from './card-more.component';

describe('CardMoreComponent', () => {
  let component: CardMoreComponent;
  let fixture: ComponentFixture<CardMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
