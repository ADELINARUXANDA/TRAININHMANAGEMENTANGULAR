import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignClassUnitComponent } from './assignClassUnit.component';

describe('AssignClassUnitComponent', () => {
  let component: AssignClassUnitComponent;
  let fixture: ComponentFixture<AssignClassUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignClassUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignClassUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
