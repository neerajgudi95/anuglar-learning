import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HTTPService {
  baseUrl =
    'https://angular-http-6e0bc-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';

  constructor(private http: HttpClient) {}

  sendPosts(postData) {
    return this.http.post(
      'https://angular-http-6e0bc-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData
    );
  }

  fetchPosts() {
    return this.http
      .get(
        'https://angular-http-6e0bc-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const resArray = [];
          for (let key in responseData) {
            resArray.push({ ...responseData[key], id: key });
          }
          return resArray;
        })
      );
  }

  clearPosts() {
    return this.http.delete(
      'https://angular-http-6e0bc-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    );
  }
}
