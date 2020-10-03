import { TestBed } from '@angular/core/testing';

import { ClassUnitsService } from './classUnits.service';

describe('ClassUnitsService', () => {
  let service: ClassUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
