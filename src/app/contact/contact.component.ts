import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  source: string = "https://blogdummi.fr/wp-content/uploads/2018/01/angular.png"
  show: boolean = true;

  constructor(private service:UsersService) { }

  ngOnInit(): void {
    this.service.info();
  }
  public display() {
   // alert("Ok");
    this.show = !this.show;
  }
}
