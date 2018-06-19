import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSourceComponent } from './place-source.component';

describe('PlaceSourceComponent', () => {
  let component: PlaceSourceComponent;
  let fixture: ComponentFixture<PlaceSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
