import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingDetailsComponent } from './ping-details.component';

describe('PingDetailsComponent', () => {
  let component: PingDetailsComponent;
  let fixture: ComponentFixture<PingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
