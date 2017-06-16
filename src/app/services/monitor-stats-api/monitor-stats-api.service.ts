import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppSettings } from '../../app.settings';
import { MonitorType } from '../../app.globals';
import { UrlBuilderService } from '../url-builder/url-builder.service';

import { WebRequestStats } from '../../models/web-request-stats';
import { PingStats } from '../../models/ping-stats';

@Injectable()
export class MonitorStatsApiService {

  constructor(private http: Http, private urlBuilderService: UrlBuilderService) {
  }

  getMonitorStats(id: string, type: string) {
    const url = this.urlBuilderService.build(AppSettings.MONITOR_STATS_API_URL, id, type);

    return this.http.get(url)
      .map(this.extractMonitorStats.bind(this))
      .catch(this.handleError);
  }

  private extractMonitorStats(response: Response): WebRequestStats[] | PingStats[] {
    const responseObj = response.json();
    const type = responseObj.statsType;
    const stats = responseObj.stats;

    const models = this.getStatsModels(type, stats);

    return models;
  }

  private getStatsModels(type: string, stats: WebRequestStats[] | PingStats[]) {
    const models = [];
    for (let x = 0; x < stats.length; x++) {
      models.push(stats[x]);
    }

    return models;
  }

  private handleError(response: Response | any) {
    return Observable.throw(response);
  }

}
