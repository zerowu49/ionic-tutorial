import { TestBed } from '@angular/core/testing';

import { Students2Service } from './students2.service';

describe('Students2Service', () => {
  let service: Students2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Students2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
