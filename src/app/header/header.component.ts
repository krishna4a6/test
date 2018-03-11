import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../assets/css/bootstrap.css','../../assets/css/slick-theme.css','../../assets/css/font-awesome.min.css','../../assets/css/header.css','../../assets/css/custom.css','../../assets/css/CH_Styles.css','../../assets/css/bootstrap-responsive-tabs.css','../../assets/css/mywork.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 angularLogo = 'assets/images/ch-logo.png';
}
