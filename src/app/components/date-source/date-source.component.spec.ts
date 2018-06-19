import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSourceComponent } from './date-source.component';

describe('DateSourceComponent', () => {
  let component: DateSourceComponent;
  let fixture: ComponentFixture<DateSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
