import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDevolutionComponent } from './place-devolution.component';

describe('PlaceDevolutionComponent', () => {
  let component: PlaceDevolutionComponent;
  let fixture: ComponentFixture<PlaceDevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
