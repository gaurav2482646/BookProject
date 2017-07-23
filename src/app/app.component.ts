import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
article: Article[];

constructor(){
  this.article = [
    new Article('angular','google.com',100),
    new Article('angular1','google.com',200),
    new Article('angular2','google.com',300),
  ];
}
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
    console.log(`title: ${title.value}, Link${link.value}`);
    this.article.push(new Article(title.value,link.value,0));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticle():Article[]{
  return this.article.sort((a:Article,b:Article)=>a.vote-b.vote);
  }

}
