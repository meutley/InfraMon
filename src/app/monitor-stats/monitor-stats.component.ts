import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MonitorApiService } from '../services/monitor-api/monitor-api.service';
import { MonitorStatsApiService } from '../services/monitor-stats-api/monitor-stats-api.service';

import { Monitor } from '../models/monitor';
import { WebRequestStats } from '../models/web-request-stats';
import { PingStats } from '../models/ping-stats';

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
    private monitorStatsApiService: MonitorStatsApiService) { }

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

    this.monitorStatsApiService.getMonitorStats(this.monitor._id, this.monitor.type)
      .subscribe(data => {
        this.onLoadMonitorStats(data);
      }, err => {
        this.onLoadMonitorStatsFailed(err);
      });
  }

  private onLoadMonitorStats(data: WebRequestStats | PingStats) {
    this.isLoadingStatsData = false;
    this.didLoadingStatsDataFail = false;
  }

  private onLoadMonitorStatsFailed(err: any) {
    this.isLoadingStatsData = false;
    this.didLoadingStatsDataFail = false;
  }

}
