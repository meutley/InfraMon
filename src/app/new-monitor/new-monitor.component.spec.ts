import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMonitorComponent } from './new-monitor.component';

describe('NewMonitorComponent', () => {
  let component: NewMonitorComponent;
  let fixture: ComponentFixture<NewMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
