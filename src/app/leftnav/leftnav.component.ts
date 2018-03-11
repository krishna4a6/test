import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';


@Component({
  selector: 'leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['../../assets/css/bootstrap.css','../../assets/css/slick-theme.css','../../assets/css/font-awesome.min.css','../../assets/css/header.css','../../assets/css/custom.css','../../assets/css/CH_Styles.css','../../assets/css/bootstrap-responsive-tabs.css','../../assets/css/mywork.css']

})
export class LeftnavComponent implements OnInit {
public Alltickets;
  constructor(private filtered :TicketsService) { }
 
 
  ngOnInit() {
  }
 
}
