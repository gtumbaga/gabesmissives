import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBlogPosts() {
    return this.http.get('https://admin.gabesmissives.com/wp-json/wp/v2/posts/')
  }

  getSinglePost(blogSlug) {
    return this.http.get('https://admin.gabesmissives.com/wp-json/wp/v2/posts?slug=' + blogSlug)
  }
}
