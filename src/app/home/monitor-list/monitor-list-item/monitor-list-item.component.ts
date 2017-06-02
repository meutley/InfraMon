import { Component, Input, OnInit } from '@angular/core';

import { Monitor } from '../../../models/monitor';

@Component({
  selector: 'app-monitor-list-item',
  templateUrl: './monitor-list-item.component.html',
  styleUrls: ['./monitor-list-item.component.scss']
})
export class MonitorListItemComponent implements OnInit {

  @Input()
  monitor: Monitor;

  constructor() { }

  ngOnInit() {
  }

}
