import { TestBed } from '@angular/core/testing';

import { HouselistingsService } from './houselistings.service';

describe('HouselistingsService', () => {
  let service: HouselistingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouselistingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
