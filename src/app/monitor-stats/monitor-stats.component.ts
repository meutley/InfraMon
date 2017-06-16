import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MonitorApiService } from '../services/monitor-api/monitor-api.service';
import { MonitorDataApiService } from '../services/monitor-data-api/monitor-data-api.service';

import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-monitor-stats',
  templateUrl: './monitor-stats.component.html',
  styleUrls: ['./monitor-stats.component.scss']
})
export class MonitorStatsComponent implements OnInit {

  private id: string;
  private routeParamsSub: any;
  private monitor: Monitor;

  private isLoading: boolean;
  private didLoadingFail: boolean;

  private isLoadingStatsData: boolean;
  private didLoadingStatsDataFail: boolean;

  constructor(
    private route: ActivatedRoute,
    private monitorApiService: MonitorApiService,
    private monitorDataApiService: MonitorDataApiService) { }

  ngOnInit() {
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadMonitorStats();
    });
  }

  private loadMonitorStats() {
    this.isLoading = true;
    this.didLoadingFail = false;

    this.isLoadingStatsData = false;
    this.didLoadingStatsDataFail = false;

    this.loadMonitorDetails(this.loadMonitorStatsData.bind(this));
  }

  private loadMonitorDetails(complete: () => void) {
    this.monitorApiService.getMonitor(this.id)
      .subscribe(data => {
        this.onLoadMonitorDetails(data);
      }, err => {
        this.onLoadMonitorDetailsFailed(err);
      });
  }

  private onLoadMonitorDetails(monitor: Monitor) {
    this.isLoading = false;
    this.didLoadingFail = false;
    this.monitor = monitor;

    this.loadMonitorStatsData();
  }

  private onLoadMonitorDetailsFailed(error: any) {
    this.isLoading = false;
    this.didLoadingFail = true;
  }

  private loadMonitorStatsData() {
    this.isLoadingStatsData = true;
    this.didLoadingStatsDataFail = false;

    // TODO: Implement MonitorDataApiService
    setTimeout(() => {
      this.isLoadingStatsData = false;
      this.didLoadingStatsDataFail = false;
    }, 2000);
  }

}
