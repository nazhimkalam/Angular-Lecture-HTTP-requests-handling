import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private httpClient: HttpClient) {}

  getJokes() {
    try {
      return this.httpClient
        .get('https://api.chucknorris.io/jokes/random')
        .toPromise();
    } catch (error) {
      console.log(`Error -> ${error}`);
      return null;
    }
  }
}
