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
export class MonitorApiService {

  constructor(private http: Http, private urlBuilderService: UrlBuilderService) {
  }

  getMonitor(id: number): Observable<Monitor> {
    const url = this.urlBuilderService.build(AppSettings.MONITOR_API_URL, id.toString());

    return this.http.get(url)
      .map(this.extractMonitor)
      .catch(this.handleError);
  }

  getMonitors(): Observable<Monitor[]> {
    const url = AppSettings.MONITOR_API_URL;

    return this.http.get(url)
      .map(this.extractMonitors)
      .catch(this.handleError);
  }

  saveMonitor(monitor: Monitor): Observable<any> {
    const isNew = monitor.id === 0;
    const method = isNew ? 'create' : 'update';
    const url =
      isNew
      ? this.urlBuilderService.build(AppSettings.MONITOR_API_URL, method)
      : this.urlBuilderService.build(AppSettings.MONITOR_API_URL, method, monitor.id.toString());

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestBody = JSON.stringify(monitor)

    return this.http.post(url, requestBody, { headers: headers })
      .map((res: Response) => res)
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  deleteMonitor(id: number): Observable<any> {
    const url = this.urlBuilderService.build(AppSettings.MONITOR_API_URL, 'delete', id.toString());

    return this.http.delete(url)
      .map((res: Response) => res)
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  private extractMonitor(response: Response): Monitor {
    const monitor = response.json();

    return monitor;
  }

  private extractMonitors(response: Response): Monitor[] {
    const body = response.json();

    const monitors: Monitor[] = [];
    for (let x = 0; x < body.length; x++) {
      monitors.push(body[x]);
    }

    return monitors;
  }

  private handleError(response: Response | any) {
    return Observable.throw(response);
  }

}
