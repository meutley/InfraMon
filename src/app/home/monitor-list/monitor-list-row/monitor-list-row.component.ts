import { Component, Input, OnInit } from '@angular/core';

import { Monitor } from '../../../models/monitor';

@Component({
  selector: 'app-monitor-list-row',
  templateUrl: './monitor-list-row.component.html',
  styleUrls: ['./monitor-list-row.component.scss']
})
export class MonitorListRowComponent implements OnInit {

  @Input()
  monitor: Monitor;

  constructor() { }

  ngOnInit() {
  }

  private getIsActiveText(): string {
    return this.monitor.isActive ? 'Yes' : 'No';
  }

}
