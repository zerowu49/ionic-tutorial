import { TestBed } from '@angular/core/testing';

import { Students3Service } from './students3.service';

describe('Students3Service', () => {
  let service: Students3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Students3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
