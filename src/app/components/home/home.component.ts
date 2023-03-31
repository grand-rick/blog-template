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
  selectedCategory: string = '';
  allCategoryKey: string = 'View All';


  constructor (private blogService: BlogService) {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    })
  }

  ngOnInit(): void {}

  onSearch(searchTerm: string): void {
    if (searchTerm === '') {
      this.blogService.getBlogs().subscribe(data => {
        this.blogs = data.filter(blog => blog.category === this.selectedCategory);
        return;
      });
    }

    if (this.hasSearched && this.selectedCategory !== this.allCategoryKey) {
      this.blogService.getBlogs().subscribe(data => {
        this.blogs = data.filter(blog => blog.category === this.selectedCategory);

        this.hasSearched = false;

        this.onSearch(searchTerm);
      });
    }

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

      if (category === this.allCategoryKey) {
        this.selectedCategory = this.allCategoryKey;
        this.blogs = blogs;
        return
      };

      this.selectedCategory = category;
      this.blogs = blogs.filter(blog => blog.category === category);
    });
  }
}
