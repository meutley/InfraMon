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

    this.monitorApiService
      .getMonitors()
      .subscribe(data => {
        this.isLoading = false;
        this.didLoadingFail = false;
        this.monitors = data;
      }, err => {
        this.isLoading = false;
        this.didLoadingFail = true;
        this.responseStatusCode = err.status;
      });
  }

}
