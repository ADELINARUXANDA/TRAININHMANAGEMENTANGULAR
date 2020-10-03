import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourssesAddComponent } from './coursses-add.component';

describe('CourssesAddComponent', () => {
  let component: CourssesAddComponent;
  let fixture: ComponentFixture<CourssesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourssesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourssesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
