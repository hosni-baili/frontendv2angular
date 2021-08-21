import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
