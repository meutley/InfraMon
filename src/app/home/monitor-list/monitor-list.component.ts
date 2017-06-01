import { Component, Input, OnInit } from '@angular/core';

import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css']
})
export class MonitorListComponent implements OnInit {

  @Input()
  monitors: Monitor[];

  constructor() {
    this.monitors = [
      new Monitor()
    ];
  }

  ngOnInit() {
  }

}
