import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorListRowComponent } from './monitor-list-row.component';

describe('MonitorListRowComponent', () => {
  let component: MonitorListRowComponent;
  let fixture: ComponentFixture<MonitorListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
