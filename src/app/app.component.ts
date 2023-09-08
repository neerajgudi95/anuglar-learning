import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HTTPService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  constructor(private http: HttpClient, private httpService: HTTPService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.httpService.sendPosts(postData).subscribe(() => {
      this.onFetchPosts();
    });
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.httpService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request
    this.httpService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
