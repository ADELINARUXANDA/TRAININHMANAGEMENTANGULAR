import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUnitsEditComponent } from './class-units-edit.component';

describe('ClassUnitsEditComponent', () => {
  let component: ClassUnitsEditComponent;
  let fixture: ComponentFixture<ClassUnitsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUnitsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUnitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
