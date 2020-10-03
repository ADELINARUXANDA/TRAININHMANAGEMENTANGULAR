import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourssesListComponent } from './coursses-list.component';

describe('CourssesListComponent', () => {
  let component: CourssesListComponent;
  let fixture: ComponentFixture<CourssesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourssesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourssesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
