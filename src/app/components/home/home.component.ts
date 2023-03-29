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
  hasSearched: boolean = false;


  constructor (private blogService: BlogService) {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    })
  }

  ngOnInit(): void {}

  onSearch(searchTerm: string) {
    this.blogs = this.blogs.filter(blog => {
      const blogTitle: string = blog.title.split(' ').join('').toLowerCase();
      this.hasSearched = true;
      return blogTitle.includes(searchTerm.toLowerCase());
    });
  } 

  onCategorySelect(category: string): void {
    let blogs: Blog[] = [];

    this.blogService.getBlogs().subscribe(data => {
      blogs = data;

      if (category === 'View All') {
        this.blogs = blogs;
        return
      };

      this.blogs = blogs.filter(blog => blog.category === category);
    });
  }
}
