import { Component, OnInit } from '@angular/core';

import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-new-monitor',
  templateUrl: './new-monitor.component.html',
  styleUrls: ['./new-monitor.component.css']
})
export class NewMonitorComponent implements OnInit {

  monitor: Monitor;

  constructor() {
    this.monitor = new Monitor();
  }

  ngOnInit() {
  }

}
