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
    });
  }

  ngOnInit(): void {}

  onSearch(searchTerm: string): void {
    let filteredBlogs = this.blogs;

    if (searchTerm && this.selectedCategory !== this.allCategoryKey) {
      filteredBlogs = filteredBlogs.filter(blog => blog.category === this.selectedCategory);
    }

    if (searchTerm) {
      const blogTitle: string = searchTerm.toLowerCase().split(' ').join('');
      filteredBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(blogTitle));
    }

    this.blogs = filteredBlogs;
  }

  onCategorySelect(category: string): void {
    this.blogService.getBlogs().subscribe(data => {
      let blogs: Blog[] = data;

      if (category === this.allCategoryKey) {
        this.selectedCategory = this.allCategoryKey;
        this.blogs = blogs;
      } else {
        this.selectedCategory = category;
        this.blogs = blogs.filter(blog => blog.category === category);
      }
    });
  }
}
