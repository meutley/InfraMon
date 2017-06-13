import { Component, Input, OnInit } from '@angular/core';

import { Ping } from '../../models/ping';

@Component({
  selector: 'app-ping-details',
  templateUrl: './ping-details.component.html',
  styleUrls: ['./ping-details.component.scss']
})
export class PingDetailsComponent implements OnInit {

  @Input()
  pingDetails: Ping;

  @Input()
  isSaving: boolean;

  @Input()
  isReadOnly: boolean;

  constructor() {
    this.isReadOnly = false;
  }

  ngOnInit() {
  }

}
