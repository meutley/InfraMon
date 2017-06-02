import { TestBed, inject } from '@angular/core/testing';

import { WebRequestTestService } from './web-request-test.service';

describe('WebRequestTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebRequestTestService]
    });
  });

  it('should ...', inject([WebRequestTestService], (service: WebRequestTestService) => {
    expect(service).toBeTruthy();
  }));
});
