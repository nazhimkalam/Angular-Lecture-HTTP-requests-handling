import { Component, VERSION } from '@angular/core';
import { JokeService } from './services/joke-service.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private jokeService: JokeService){

  }

  getJokes(){

    const jokes = this.jokeService.getJokes();
    console.log(jokes)

  }

}

