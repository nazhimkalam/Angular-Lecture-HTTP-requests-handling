import { JokeService } from './services/joke-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-lecture3';
  chuckyJoke = '';
  constructor(private jokeService: JokeService) {

  }

  async getJokes() {

    try {

      const joke: any = await this.jokeService.getJokes();
      
      const jokeValue = joke.value;
      
      this.chuckyJoke = jokeValue;

      console.log(joke);
    } 
    catch (e) {
    
      console.log(`Error ----> ${e}`);
    
    }

  }
}
