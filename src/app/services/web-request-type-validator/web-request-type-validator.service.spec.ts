import { TestBed, inject } from '@angular/core/testing';

import { WebRequestTypeValidatorService } from './web-request-type-validator.service';

import { WebRequest } from '../../models/web-request';

describe('WebRequestTypeValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebRequestTypeValidatorService]
    });
  });

  it('should return true when the object is valid', inject([WebRequestTypeValidatorService], (service: WebRequestTypeValidatorService) => {
    const webRequest = new WebRequest();
    webRequest.url = 'http://test';
    webRequest.method = 'GET';
    webRequest.expectedResponseStatusCode = 200;

    const isValid = service.validate(webRequest);
    expect(isValid).toEqual(true);
  }));

  it('should return false when invalid', inject([WebRequestTypeValidatorService], (service: WebRequestTypeValidatorService) => {
    const webRequest = new WebRequest();
    webRequest.url = 'http://test';

    const isValid = service.validate(webRequest);
    expect(isValid).toEqual(false);
  }));
});
