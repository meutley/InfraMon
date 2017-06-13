import { Injectable } from '@angular/core';

import { Ping } from '../../models/ping';

@Injectable()
export class PingTypeValidatorService {

  constructor() { }

  validate(ping: Ping): boolean {
    return (ping.hostAddress !== null && ping.hostAddress !== undefined && ping.hostAddress.length > 0);
  }

}
