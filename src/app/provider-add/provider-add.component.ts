import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {
  provider: any;
  constructor(private service: ProvidersService, private router: Router) { }

  ngOnInit(): void {
  }

  createProvider(myform) {
    this.service.createProvider(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );
  }

}
