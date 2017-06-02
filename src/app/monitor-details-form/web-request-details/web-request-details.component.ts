import { Component, Input, OnInit } from '@angular/core';

import { WebRequestTestService } from '../../services/web-request-test/web-request-test.service';

import { WebRequest } from '../../models/web-request';

@Component({
  selector: 'app-web-request-details',
  templateUrl: './web-request-details.component.html',
  styleUrls: ['./web-request-details.component.scss']
})
export class WebRequestDetailsComponent implements OnInit {

  methods = [ 'GET' ];

  isTesting: boolean;
  testUrlResponseStatusCode: any;

  @Input()
  webRequestDetails: WebRequest;

  constructor(private webRequestTestService: WebRequestTestService) {
    this.testUrlResponseStatusCode = null;
  }

  ngOnInit() {
  }

  canTest(): boolean {
    return !this.isTesting
      && (this.webRequestDetails.url && this.webRequestDetails.url.length > 0)
      && (this.webRequestDetails.method && this.webRequestDetails.method.length > 0)
      && this.webRequestDetails.expectedResponseStatusCode != null;
  }

  doTestUrl() {
    this.isTesting = true;

    this.webRequestTestService.testRequest(
      this.webRequestDetails.url,
      this.webRequestDetails.method,
      this.webRequestDetails.expectedResponseStatusCode)
      .subscribe((res) => {
        this.isTesting = false;
        this.testUrlResponseStatusCode = res.status;
      }, (err) => {
        this.isTesting = false;
        this.testUrlResponseStatusCode = err.status !== 0 ? err.status : 'Unknown error';
      });
  }

  doShowTestResponseStatusCode(): boolean {
    return !this.isTesting && this.testUrlResponseStatusCode !== null && this.testUrlResponseStatusCode !== undefined;
  }

}
