import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorStatsComponent } from './monitor-stats.component';

describe('MonitorStatsComponent', () => {
  let component: MonitorStatsComponent;
  let fixture: ComponentFixture<MonitorStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
