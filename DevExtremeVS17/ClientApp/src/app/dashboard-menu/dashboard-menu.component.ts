import { Component } from '@angular/core';
import { Category, Service } from './dashboard-menu.service'


@Component({
  selector: "app-this-doesnt-actually-matter-because-of-routing",
  templateUrl: "./dashboard-menu.component.html",
  styleUrls: ["./dashboard-menu.component.css"],
  providers: [Service]
})
export class DashboardMenuComponent {
  menu: Category[];

  constructor(service: Service) {
    this.menu = service.getMenu();
  }}
