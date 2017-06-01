import { TestBed, inject } from '@angular/core/testing';

import { MonitorApiService } from './monitor-api.service';

describe('MonitorApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitorApiService]
    });
  });

  it('should ...', inject([MonitorApiService], (service: MonitorApiService) => {
    expect(service).toBeTruthy();
  }));
});
