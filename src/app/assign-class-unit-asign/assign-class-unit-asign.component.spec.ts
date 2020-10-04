import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignClassUnitAsignComponent } from './assign-class-unit-asign.component';

describe('AssignClassUnitAsignComponent', () => {
  let component: AssignClassUnitAsignComponent;
  let fixture: ComponentFixture<AssignClassUnitAsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignClassUnitAsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignClassUnitAsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
