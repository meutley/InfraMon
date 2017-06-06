import { Component, Input, OnInit } from '@angular/core';

import { MonitorApiService } from '../../services/monitor-api/monitor-api.service';

import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss'],
  providers: [MonitorApiService]
})
export class MonitorListComponent implements OnInit {

  private isLoading: boolean;
  private didLoadingFail: boolean;
  private responseStatusCode: any;
  private monitors: Monitor[];

  constructor(private monitorApiService: MonitorApiService) {
  }

  ngOnInit() {
    this.loadMonitors();
  }

  private loadMonitors() {
    this.isLoading = true;

    this.monitorApiService
      .getMonitors()
      .subscribe(data => {
        this.finishLoading(data);
      }, err => {
        this.onLoadError(err);
      });
  }

  private finishLoading(data) {
    this.isLoading = false;
    this.didLoadingFail = false;
    this.monitors = data;
  }

  private onLoadError(err) {
    this.isLoading = false;
    this.didLoadingFail = true;
    this.responseStatusCode = err.status;
  }

  private hasMonitors(): boolean {
    return this.monitors && this.monitors.length > 0;
  }

  private shouldListMonitors(): boolean {
    return !this.isLoading
      && !this.didLoadingFail
      && this.monitors
      && this.monitors.length > 0;
  }

  private getIsActiveText(monitor: Monitor): string {
    return monitor.isActive === true ? 'Yes' : 'No';
  }

  private deleteMonitor(monitor: Monitor) {
    this.monitorApiService
      .deleteMonitor(monitor.id)
      .subscribe(data => {
        this.loadMonitors();
      }, err => {

      });
  }

}
