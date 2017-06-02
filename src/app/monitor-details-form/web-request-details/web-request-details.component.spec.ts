import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRequestDetailsComponent } from './web-request-details.component';

describe('WebRequestDetailsComponent', () => {
  let component: WebRequestDetailsComponent;
  let fixture: ComponentFixture<WebRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
