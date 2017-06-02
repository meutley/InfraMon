import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class WebRequestTestService {

  constructor(private http: Http) { }

  testRequest(url: string, method: string, expectedStatusCode: number) {
    switch (method) {
      case 'GET':
        return this.testGetRequest(url, expectedStatusCode);
      default:
        return null;
    }
  }

  private testGetRequest(url: string, expectedStatusCode: number): Observable<any> {
    return this.http.get(url)
      .map((res) => { return res; })
      .catch((err) => { return Observable.throw(err); });
  }

}
