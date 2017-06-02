import { TestBed, inject } from '@angular/core/testing';

import { PingTypeValidatorService } from './ping-type-validator.service';

describe('PingTypeValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PingTypeValidatorService]
    });
  });

  it('should ...', inject([PingTypeValidatorService], (service: PingTypeValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
