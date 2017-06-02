import { TestBed, inject } from '@angular/core/testing';

import { WebRequestTypeValidatorService } from './web-request-type-validator.service';

describe('WebRequestTypeValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebRequestTypeValidatorService]
    });
  });

  it('should ...', inject([WebRequestTypeValidatorService], (service: WebRequestTypeValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
