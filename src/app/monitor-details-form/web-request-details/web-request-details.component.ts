import { Component, Input, OnInit } from '@angular/core';

import { WebRequestTypeValidatorService } from '../../services/web-request-type-validator/web-request-type-validator.service';
import { WebRequestTestService } from '../../services/web-request-test/web-request-test.service';

import { WebRequestMethod } from '../../app.globals';

import { WebRequest } from '../../models/web-request';

@Component({
  selector: 'app-web-request-details',
  templateUrl: './web-request-details.component.html',
  styleUrls: ['./web-request-details.component.css']
})
export class WebRequestDetailsComponent implements OnInit {

  methods = [
    WebRequestMethod.Get,
    WebRequestMethod.Post
  ];

  isTesting: boolean;
  testUrlResponseStatusCode: any;

  @Input()
  webRequestDetails: WebRequest;

  @Input()
  isSaving: boolean;

  @Input()
  isReadOnly: boolean;

  constructor(
    private webRequestTestService: WebRequestTestService,
    private webRequestTypeValidatorService: WebRequestTypeValidatorService) {
    this.testUrlResponseStatusCode = null;
    this.isReadOnly = false;
  }

  ngOnInit() {
  }

  canTest(): boolean {
    return !this.isTesting && this.webRequestTypeValidatorService.validate(this.webRequestDetails);
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
    return !this.isTesting && this.testUrlResponseStatusCode !== null && this.testUrlResponseStatusCode !== undefined && !this.isSaving;
  }

}
