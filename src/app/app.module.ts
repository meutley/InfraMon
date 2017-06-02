import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { HomeComponent } from './home/home.component';
import { MonitorListComponent } from './home/monitor-list/monitor-list.component';
import { MonitorListItemComponent } from './home/monitor-list/monitor-list-item/monitor-list-item.component';
import { MonitorDetailsComponent } from './monitor-details/monitor-details.component';
import { NewMonitorComponent } from './new-monitor/new-monitor.component';

import { MonitorApiService } from './services/monitor-api/monitor-api.service';
import { UrlBuilderService } from './services/url-builder/url-builder.service';

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
    NewMonitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    MonitorApiService,
    UrlBuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
