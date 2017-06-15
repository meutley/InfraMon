import { TestBed, inject } from '@angular/core/testing';

import { MonitorValidatorService } from './monitor-validator.service';
import { PingTypeValidatorService } from '../ping-type-validator/ping-type-validator.service';
import { WebRequestTypeValidatorService } from '../web-request-type-validator/web-request-type-validator.service';
import { MockPingTypeValidatorService, MockWebRequestTypeValidatorService } from './mock-services';

import { Monitor } from '../../models/monitor';

describe('MonitorValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MonitorValidatorService,
        { provide: PingTypeValidatorService, useClass: MockPingTypeValidatorService },
        { provide: WebRequestTypeValidatorService, useClass: MockWebRequestTypeValidatorService }
      ]
    });
  });

  it('should return true when object is valid', inject([MonitorValidatorService, PingTypeValidatorService, WebRequestTypeValidatorService],
  (service: MonitorValidatorService,
   pingTypeValidatorService: PingTypeValidatorService,
   webRequestTypeValidatorService: WebRequestTypeValidatorService) => {
    const monitor = new Monitor();
    monitor._id = '1';
    monitor.name = 'Test';
    monitor.frequencyAmount = 5;
    monitor.frequencyPeriod = 'Seconds';

    const isValid = service.validate(monitor);
    expect(isValid).toEqual(true);
  }));

  it('should return false when invalid', inject([MonitorValidatorService, PingTypeValidatorService, WebRequestTypeValidatorService],
  (service: MonitorValidatorService,
   pingTypeValidatorService: PingTypeValidatorService,
   webRequestTypeValidatorService: WebRequestTypeValidatorService) => {
    const monitor = new Monitor();
    monitor._id = '1';

    const isValid = service.validate(monitor);
    expect(isValid).toEqual(false);
  }));
});
