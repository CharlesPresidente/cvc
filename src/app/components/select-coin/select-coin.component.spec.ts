import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCoinComponent } from './select-coin.component';

describe('SelectCoinComponent', () => {
  let component: SelectCoinComponent;
  let fixture: ComponentFixture<SelectCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
