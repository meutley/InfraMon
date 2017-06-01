import { Injectable } from '@angular/core';

import { Monitor } from '../../models/monitor';

@Injectable()
export class MonitorApiService {

  private _mockMonitors: Monitor[];

  constructor() {
    for (let x = 0; x < 15; x++) {
      const monitor = new Monitor();
      monitor.name = 'Monitor ' + x;

      this._mockMonitors.push(monitor);
    }
  }

  getMonitors(): Monitor[] {
    return this._mockMonitors;
  }

}
