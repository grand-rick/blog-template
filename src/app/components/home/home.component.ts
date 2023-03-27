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
  hasSearched: boolean = false;


  constructor (private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    })
  }

  search(): void {
    if (this.hasSearched) {
      this.blogService.getBlogs().subscribe(data => {
        this.blogs = data;

        this.hasSearched = false;

        this.search();
      });
    }

    this.blogs = this.blogs.filter(blog => {
      const blogTitle: string = blog.title.split(' ').join('').toLowerCase();
      this.hasSearched = true;
      return blogTitle.includes(this.query.toLowerCase());
    });
  }
}
