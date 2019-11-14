import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  longURL: string;
  tinyURL: string;
  originURL: string;
  map = new Map();

  ngOnInit() {
    this.longURL = '';
  }

  createTinyURL(longURL: string) {
    let i = this.hashCode(longURL);
    let code = longURL.split('/')[0] + longURL.split('/')[1] + '//' + longURL.split('/')[2] + '/';
    this.map.set(this.base10ToBase62(Math.abs(i)), longURL);
    this.tinyURL = code + this.base10ToBase62(Math.abs(i));
    console.log(this.map);
  }

  getOriginURL(shortUrl) {
    let host = shortUrl.split('/')[0] + shortUrl.split('/')[1] + '//' + shortUrl.split('/')[2] + '/'
    let code = shortUrl.replace(host, "");
    this.originURL = this.map.get(code);
  }

  //convert longurl to hashcode
  hashCode(str) {
    let hash = 0, i, chr, len;
    if (str.length === 0) return hash;
    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 6) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }


  base10ToBase62(number) {
    let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      radix = chars.length,
      qutient = +number,
      arr = [];
    do {
      let mod = qutient % radix;
      qutient = (qutient - mod) / radix;
      arr.unshift(chars[mod]);
    } while (qutient);
    return arr.join('');
  }

}