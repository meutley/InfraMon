import { TestBed, inject } from '@angular/core/testing';

import { UrlBuilderService } from './url-builder.service';

describe('UrlBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlBuilderService]
    });
  });

  it('should ...', inject([UrlBuilderService], (service: UrlBuilderService) => {
    expect(service).toBeTruthy();
  }));

  it('should return empty when no parts supplied', inject([UrlBuilderService], (service: UrlBuilderService) => {
    const result = service.build();

    expect(result).toEqual('');
  }));

  it('should return single part when one part supplied', inject([UrlBuilderService], (service: UrlBuilderService) => {
    const result = service.build('part1');

    expect(result).toEqual('part1');
  }));

  it('should combine URL with slashes', inject([UrlBuilderService], (service: UrlBuilderService) => {
    const result = service.build('part1', 'part2', 'part3');

    expect(result).toEqual('part1/part2/part3');
  }));
});
