import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourssesEditComponent } from './coursses-edit.component';

describe('CourssesEditComponent', () => {
  let component: CourssesEditComponent;
  let fixture: ComponentFixture<CourssesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourssesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourssesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
