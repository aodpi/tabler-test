import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
  name: string;
  link: string;
  iconClass?: string;
  items?: MenuItem[];
}

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.scss']
})
export class AppmenuComponent implements OnInit {
  @Input() items: MenuItem[] | undefined;

  constructor(public router: Router) {

  }
  ngOnInit(): void {
    this.items = [{
      name: 'Home',
      link: '/',
      iconClass: 'ti-aperture'
    }, {
        name: 'Reports',
        link: '/reports',
        iconClass: 'ti-chart-infographic'
      }]
  }

  isActive(item: MenuItem) {
    var url = this.router.url;

    return url === item.link ||
      item.items?.some(v => v.link === url);
  }
}
