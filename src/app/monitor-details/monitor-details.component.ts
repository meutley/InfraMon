import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MonitorApiService } from '../services/monitor-api/monitor-api.service';

import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-monitor-details',
  templateUrl: './monitor-details.component.html',
  styleUrls: ['./monitor-details.component.css']
})
export class MonitorDetailsComponent implements OnDestroy, OnInit {

  private id: number;
  private sub: any;
  private monitor: Monitor;

  private isLoading: boolean;
  private didLoadingFail: boolean;

  private isEditing: boolean;

  constructor(private route: ActivatedRoute, private monitorApiService: MonitorApiService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadMonitorDetails();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
    return this.isEditing ? 'Save' : 'Edit';
  }

  private onClickEditButton() {
    this.isEditing = !this.isEditing;
  }

  private onCancelEdit() {
    this.isEditing = false;
  }

}
