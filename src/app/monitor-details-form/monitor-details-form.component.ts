import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Monitor } from '../models/monitor';

import { FrequencyPeriod, MonitorType } from '../app.globals';
import { AppSettings } from '../app.settings';
import { MonitorApiService } from '../services/monitor-api/monitor-api.service';
import { MonitorValidatorService } from '../services/monitor-validator/monitor-validator.service';

@Component({
  selector: 'app-monitor-details-form',
  templateUrl: './monitor-details-form.component.html',
  styleUrls: ['./monitor-details-form.component.css']
})
export class MonitorDetailsFormComponent implements OnInit {

  types = [ MonitorType.WebRequest, MonitorType.Ping ];
  frequencyPeriods = [ FrequencyPeriod.Seconds, FrequencyPeriod.Minutes, FrequencyPeriod.Hours ];

  isNew: boolean;
  isSaving: boolean;
  didFinishSave: boolean;
  didSaveFail: boolean;
  afterSaveMessage: string;

  @Input()
  monitor: Monitor;

  @Input()
  isReadOnly: boolean;

  constructor(
    private router: Router,
    private monitorApiService: MonitorApiService,
    private monitorValidatorService: MonitorValidatorService) {
    this.isSaving = false;
    this.didFinishSave = false;
    this.didSaveFail = false;
    this.isReadOnly = false;
  }

  ngOnInit() {
    this.isNew = this.monitor.id === 0;
  }

  private isWebRequestType(): boolean {
    return this.monitor.type === MonitorType.WebRequest;
  }

  private isPingType(): boolean {
    return this.monitor.type === MonitorType.Ping;
  }

  private canSave() {
    return !this.isSaving && this.monitorValidatorService.validate(this.monitor);
  }

  private doSave() {
    this.isSaving = true;

    this.monitorApiService
      .saveMonitor(this.monitor)
      .subscribe(res => {
        this.handleSuccessfulSave(res);
      }, err => {
        this.handleErrorOnSave(err);
      });
  }

  private handleSuccessfulSave(res: any) {
    this.isSaving = false;
    this.didFinishSave = true;
    this.didSaveFail = false;
    this.afterSaveMessage = 'Monitor saved successfully';
  }

  private handleErrorOnSave(err: any) {
    this.isSaving = false;
    this.didFinishSave = true;
    this.didSaveFail = true;
    this.afterSaveMessage = 'An error occurred during save';
  }

}
