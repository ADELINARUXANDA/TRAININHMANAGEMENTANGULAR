import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUnitEditComponent } from './classUnit-edit.component';

describe('ClassUnitEditComponent', () => {
  let component: ClassUnitEditComponent;
  let fixture: ComponentFixture<ClassUnitEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUnitEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
