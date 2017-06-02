import { Component, Input, OnInit } from '@angular/core';

import { MonitorApiService } from '../../services/monitor-api/monitor-api.service';

import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css'],
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
    this.isLoading = true;
    const self = this;

    this.monitorApiService
      .getMonitors()
      .subscribe(data => {
        self.finishLoading(data);
      }, err => {
        self.onLoadError(err);
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

}
