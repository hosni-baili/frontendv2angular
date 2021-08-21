import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any;
  constructor(private service: ArticleServiceService,private router: Router) { }

  ngOnInit(): void {
   this.refreshListArticles()
  }

  refreshListArticles() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }

  deleteArticle(article){}

  updateArticle(article){}

}
