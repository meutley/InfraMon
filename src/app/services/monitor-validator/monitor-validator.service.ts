import { Injectable } from '@angular/core';

import { WebRequestTypeValidatorService } from '../web-request-type-validator/web-request-type-validator.service';
import { PingTypeValidatorService } from '../ping-type-validator/ping-type-validator.service';

import { MonitorType } from '../../app.globals';
import { Monitor } from '../../models/monitor';

@Injectable()
export class MonitorValidatorService {

  constructor(
    private pingTypeValidatorService: PingTypeValidatorService,
    private webRequestTypeValidatorService: WebRequestTypeValidatorService) { }

  validate(monitor: Monitor): boolean {
    return monitor.name && monitor.name.length > 0 && this.isTypeValid(monitor);
  }

  private isTypeValid(monitor: Monitor): boolean {
    if (monitor.type === MonitorType.WebRequest) {
      return this.webRequestTypeValidatorService.validate(monitor.webRequestDetails);
    } else if (monitor.type === MonitorType.Ping) {
      return this.pingTypeValidatorService.validate(monitor.pingDetails);
    } else {
      return true;
    }
  }

}
