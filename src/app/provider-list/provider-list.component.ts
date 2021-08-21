import { Component, OnInit } from '@angular/core';
import { Avatar } from '../entities';
import { ProvidersService } from '../services/providers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  providers: any;
  constructor(private service: ProvidersService,private router: Router) { }

  mesproviders: string[];
  users: Avatar[];
  ngOnInit() {
    this.refreshListProviders();
    /*this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );*/
  }

  deleteProvider(myObj) {
    //console.log(this.provider);
    this.service.deleteProvider(myObj).subscribe(response => {
      console.log(response);
      this.refreshListProviders();
    })
  }

  refreshListProviders() {
    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }

  updateProvider(myObj) {
    this.router.navigate(['updateProvider' + '/' + myObj['id']]);
  }

  /*ngOnInit(): void {
    this.mesproviders = this.service.getProviders();
    this.service.getUser().subscribe(
      response =>{
        console.log(response["data"]);
        this.users = (<Avatar[]>response["data"]);
      }
    );
  }*/

}
