import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private httpClient: HttpClient) {}

  getJokes() {
    this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }
}
