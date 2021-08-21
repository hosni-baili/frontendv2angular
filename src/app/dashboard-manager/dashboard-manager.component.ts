import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
