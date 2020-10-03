import { TestBed } from '@angular/core/testing';

import { CourssesService } from './coursses.service';

describe('CourssesService', () => {
  let service: CourssesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourssesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
