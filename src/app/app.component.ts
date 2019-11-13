import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  longURL = 'https://www.amazon.com/this-is-a-complex-path/design-tinyurl';
  tinyURL:string;

  createTinyURL(longURL:string) {
    let map = [];
    let i = 0;
    map[i] = longURL;
    this.tinyURL = `https://www.amazon.com/${i++}`;
    console.log(map);
  }
}
