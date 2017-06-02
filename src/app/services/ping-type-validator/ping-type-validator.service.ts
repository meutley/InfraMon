import { Injectable } from '@angular/core';

import { Ping } from '../../models/ping';

@Injectable()
export class PingTypeValidatorService {

  constructor() { }

  validate(ping: Ping): boolean {
    return true;
  }

}
