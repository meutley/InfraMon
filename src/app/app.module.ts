import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MonitorApiService } from './services/monitor-api/monitor-api.service';
import { UrlBuilderService } from './services/url-builder/url-builder.service';
import { WebRequestTestService } from './services/web-request-test/web-request-test.service';
import { MonitorValidatorService } from './services/monitor-validator/monitor-validator.service';
import { WebRequestTypeValidatorService } from './services/web-request-type-validator/web-request-type-validator.service';
import { PingTypeValidatorService } from './services/ping-type-validator/ping-type-validator.service';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { MonitorListComponent } from './home/monitor-list/monitor-list.component';
import { MonitorListItemComponent } from './home/monitor-list/monitor-list-item/monitor-list-item.component';
import { MonitorDetailsComponent } from './monitor-details/monitor-details.component';
import { NewMonitorComponent } from './new-monitor/new-monitor.component';
import { MonitorDetailsFormComponent } from './monitor-details-form/monitor-details-form.component';
import { WebRequestDetailsComponent } from './monitor-details-form/web-request-details/web-request-details.component';
import { PingDetailsComponent } from './monitor-details-form/ping-details/ping-details.component';

const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new-monitor', component: NewMonitorComponent },
    { path: 'monitor-details/:id', component: MonitorDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    MonitorListComponent,
    MonitorListItemComponent,
    MonitorDetailsComponent,
    NewMonitorComponent,
    MonitorDetailsFormComponent,
    WebRequestDetailsComponent,
    PingDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    MonitorApiService,
    UrlBuilderService,
    WebRequestTestService,
    MonitorValidatorService,
    WebRequestTypeValidatorService,
    PingTypeValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
