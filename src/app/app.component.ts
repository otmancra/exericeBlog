import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  posts = [
    {
      title: "Mon premier post",
      content: "Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post Mon premier post",
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: "Mon deuxieme post",
      content: "Mon deuxieme post Mon deuxieme post Mon deuxieme post Mon deuxieme post Mon deuxieme post Mon deuxieme post ",
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Encore un post Encore un post Encore un post Encore un post Encore un post Encore un post Encore un post Encore un post",
      loveIts: 0,
      created_at: new Date()
    },
  ];
}
