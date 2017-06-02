import { TestBed, inject } from '@angular/core/testing';

import { MonitorValidatorService } from './monitor-validator.service';

describe('MonitorValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitorValidatorService]
    });
  });

  it('should ...', inject([MonitorValidatorService], (service: MonitorValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
