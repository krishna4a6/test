import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { TicketsService } from './services/tickets.service';
import { RolesService } from './roles.service';
import { LeftnavComponent } from './leftnav/leftnav.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    LeftnavComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
 providers: [TicketsService,RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
