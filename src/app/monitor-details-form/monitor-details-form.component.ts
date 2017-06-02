import { Component, Input, OnInit } from '@angular/core';

import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-monitor-details-form',
  templateUrl: './monitor-details-form.component.html',
  styleUrls: ['./monitor-details-form.component.scss']
})
export class MonitorDetailsFormComponent implements OnInit {

  types = [ 'Web Request', 'Ping' ];

  @Input()
  monitor: Monitor;

  constructor() { }

  ngOnInit() {
  }

  private isWebRequestType(): boolean {
    return this.monitor.type === 'Web Request';
  }

  private isPingType(): boolean {
    return this.monitor.type === 'Ping';
  }

}
