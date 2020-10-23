import { JokeService } from './services/joke-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-lecture3';

  constructor(private jokeService: JokeService) {}

  getJokes() {
    const jokes = this.jokeService.getJokes();
    console.log(jokes);
  }
}
