import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUnitLisComponent } from './class-unit-lis.component';

describe('ClassUnitLisComponent', () => {
  let component: ClassUnitLisComponent;
  let fixture: ComponentFixture<ClassUnitLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUnitLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUnitLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
