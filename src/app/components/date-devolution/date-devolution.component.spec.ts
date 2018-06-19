import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDevolutionComponent } from './date-devolution.component';

describe('DateDevolutionComponent', () => {
  let component: DateDevolutionComponent;
  let fixture: ComponentFixture<DateDevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
