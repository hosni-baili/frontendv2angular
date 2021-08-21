import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  article: any;
  urlArticles = environment.rootURL+'articles';
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  constructor( private Http: HttpClient) { }

  listArticles() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.get(this.urlArticles + '/list',{ headers });
    return this.Http.get(this.urlArticles + '/list');
  }
}
