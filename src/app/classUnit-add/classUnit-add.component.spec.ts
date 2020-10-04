import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUnitAddComponent } from './classUnit-add.component';

describe('ClassUnitAddComponent', () => {
  let component: ClassUnitAddComponent;
  let fixture: ComponentFixture<ClassUnitAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUnitAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUnitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
