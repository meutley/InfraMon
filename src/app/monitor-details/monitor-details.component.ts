import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MonitorApiService } from '../services/monitor-api/monitor-api.service';

import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-monitor-details',
  templateUrl: './monitor-details.component.html',
  styleUrls: ['./monitor-details.component.scss']
})
export class MonitorDetailsComponent implements OnDestroy, OnInit {

  private id: string;
  private routeParamsSub: any;
  private queryParamsSub: any;
  private monitor: Monitor;

  private isLoading: boolean;
  private didLoadingFail: boolean;

  private isEditing: boolean;
  private shouldShowSaveAlert: boolean;

  constructor(private route: ActivatedRoute, private monitorApiService: MonitorApiService) {
  }

  ngOnInit() {
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadMonitorDetails();
    });

    this.queryParamsSub = this.route.queryParams.subscribe(params => {
      this.isEditing = params['edit'] && params['edit'] === '1';
    });
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
    this.queryParamsSub.unsubscribe();
  }

  private loadMonitorDetails() {
    this.isLoading = true;
    this.didLoadingFail = false;

    this.monitorApiService.getMonitor(this.id)
      .subscribe(data => {
        this.isLoading = false;
        this.didLoadingFail = false;
        this.monitor = data;
      }, (err) => {
        this.isLoading = false;
        this.didLoadingFail = true;
      });
  }

  private getEditButtonText(): string {
    return this.isEditing ? 'Cancel' : 'Edit';
  }

  private onClickEditButton() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.shouldShowSaveAlert = false;
      this.loadMonitorDetails();
    }
  }

}
