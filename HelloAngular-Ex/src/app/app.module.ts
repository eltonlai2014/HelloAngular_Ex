import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaugeComponent } from './gauge/gauge.component';
import { HelloComponent } from './hello/hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

// 測試HTTP Client
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    GaugeComponent,
    HelloComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
