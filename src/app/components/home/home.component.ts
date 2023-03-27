import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  blogs: Blog[] = [];
  query: string = '';


  constructor (private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    })
  }

  search(): void {
    this.ngOnInit();
    this.blogs = this.blogs.filter(blog => {
      const blogTitle: string = blog.title.split(' ').join('').toLowerCase();
      return blogTitle.includes(this.query.toLowerCase());
    });
  }
}
