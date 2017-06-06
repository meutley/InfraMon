import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppSettings } from '../../app.settings';
import { UrlBuilderService } from '../url-builder/url-builder.service';

import { Monitor } from '../../models/monitor';

@Injectable()
export class MonitorDataApiService {

  constructor(private http: Http, private urlBuilderService: UrlBuilderService) {
  }

}
