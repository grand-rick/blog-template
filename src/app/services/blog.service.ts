import { Injectable } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('assets/data.json');
  }

  getCurrentBlog(id: string): Blog {
    let allBlogs: Blog[] = [];

    this.getBlogs().subscribe(data => {
      allBlogs = data;
    });

    const currentBlog: Blog = allBlogs.find(blog => blog.id === id) || {id, title: '404', img: '404', description: '404', body: '404'};
    return currentBlog;
  }
}
