import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Monitor } from '../../models/monitor';

@Injectable()
export class MonitorApiService {

  constructor(private http: Http) {
  }

  getMonitor(id: number): Observable<Monitor> {
    return this.http.get('http://localhost:4200/api/monitor/' + id)
      .map(this.extractMonitor)
      .catch(this.handleError);
  }

  getMonitors(): Observable<Monitor[]> {
    return this.http.get('http://localhost:4200/api/monitor')
      .map(this.extractMonitors)
      .catch(this.handleError);
  }

  private extractMonitor(response: Response): Monitor {
    const monitor = response.json();
    console.log(response);

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
