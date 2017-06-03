import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorListItemComponent } from './monitor-list-item.component';

describe('MonitorListItemComponent', () => {
  let component: MonitorListItemComponent;
  let fixture: ComponentFixture<MonitorListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
