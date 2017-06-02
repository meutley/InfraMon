import { Injectable } from '@angular/core';

@Injectable()
export class UrlBuilderService {

  constructor() { }

  build(...parts: string[]) {
    if (parts.length === 0) {
      return '';    // No parts specified
    } else if (parts.length === 1) {
      return parts[0];    // Only one part
    } else {
      let result = '';

      for (let x = 0; x < parts.length; ++x) {
        if (x > 0) {
          if (result[result.length - 1] !== '/') {
            result += '/';
          }

          result += parts[x];
        } else {
          result = parts[x];    // First part
        }
      }

      return result;
    }
  }

}
