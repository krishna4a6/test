import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GrowlModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    GrowlModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
