import { TestBed } from '@angular/core/testing';

import { Students1Service } from './students1.service';

describe('Students1Service', () => {
  let service: Students1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Students1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
