import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { RolesService } from '../roles.service';
import { Http, Response } from '@angular/http';
import { LeftnavComponent } from '../leftnav/leftnav.component';

 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html', 
 // directives: [LeftnavComponent],
  styleUrls: ['../../assets/css/bootstrap.css','../../assets/css/slick-theme.css','../../assets/css/font-awesome.min.css','../../assets/css/header.css','../../assets/css/custom.css','../../assets/css/CH_Styles.css','../../assets/css/bootstrap-responsive-tabs.css','../../assets/css/mywork.css']
})
export class BodyComponent implements OnInit {
public Alltickets; 
 
  constructor(private tickets: TicketsService,private ticketsr: RolesService) { 
  this.tickets.getservices("index").subscribe(resdata=>{ this.Alltickets=resdata; });
  }
  public   showSelected(){
this.tickets.getservices("index/pending").subscribe(resdata=>{ this.Alltickets=resdata; });
  }
  ngOnInit() {}

}
