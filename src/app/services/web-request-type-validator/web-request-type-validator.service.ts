import { Injectable } from '@angular/core';

import { WebRequest } from '../../models/web-request';

@Injectable()
export class WebRequestTypeValidatorService {

  constructor() { }

  validate(webRequest: WebRequest): boolean {
    return (webRequest.url && webRequest.url.length > 0)
      && (webRequest.method && webRequest.method.length > 0)
      && webRequest.expectedResponseStatusCode != null;
  }

}
