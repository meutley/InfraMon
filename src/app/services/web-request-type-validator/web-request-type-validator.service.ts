import { Injectable } from '@angular/core';

import { WebRequest } from '../../models/web-request';

@Injectable()
export class WebRequestTypeValidatorService {

  constructor() { }

  validate(webRequest: WebRequest): boolean {
    return (webRequest.url !== undefined && webRequest.url !== null && webRequest.url.length > 0)
      && (webRequest.method !== undefined && webRequest.method !== null && webRequest.method.length > 0)
      && webRequest.expectedResponseStatusCode !== undefined && webRequest.expectedResponseStatusCode !== null;
  }

}
