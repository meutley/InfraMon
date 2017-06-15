import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, ResponseType, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MonitorApiService } from './monitor-api.service';
import { UrlBuilderService } from '../url-builder/url-builder.service';

class MockUrlBuilderService {
  build(...parts: string[]): string {
    return 'mock-url';
  }
}

describe('MonitorApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MonitorApiService,
        { provide: UrlBuilderService, useClass: MockUrlBuilderService },
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should return an Observable<Monitor>',
    inject([MonitorApiService, XHRBackend], (monitorApiService, mockBackend) => {
      const mockResponse = [
        {
          name: 'Monitor 1'
        },
        {
          name: 'Monitor 2'
        }
      ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      monitorApiService.getMonitors().subscribe((monitors) => {
        expect(monitors.length).toBe(2);
        expect(monitors[0].name).toBe('Monitor 1');
        expect(monitors[1].name).toBe('Monitor 2');
      });
    }));

  it('should return an error',
    inject([MonitorApiService, XHRBackend], (monitorApiService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockError(new Response(new ResponseOptions({
          type: ResponseType.Error,
          status: 500
        })));
      });

      monitorApiService.getMonitors().subscribe((monitors) => {
      }, (err) => {
        expect(err.type).toBe(ResponseType.Error);
        expect(err.status).toBe(500);
      });
    }));
});
