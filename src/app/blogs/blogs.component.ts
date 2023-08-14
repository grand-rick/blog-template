import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/data-access/services/blog.service';
import { Blog } from 'src/app/blogs/data-access/models/Blog';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  blogs: Blog[] = [];
  hasSearched: boolean = false;
  allCategoryKey: string = 'View All';
  selectedCategory: string = this.allCategoryKey;
  errorMsg: string = '';

  constructor (private blogService: BlogService) {}

  ngOnInit(): void {
    this.subscription = this.blogService.getBlogs().subscribe(data => this.blogs = data);
  }

  onSearch(searchTerm: string): void {
    /* Removing white space from the search term. */
    searchTerm = searchTerm.trim().toLowerCase();

    if (!searchTerm) {
      this.blogService.getBlogs().subscribe(data => this.blogs = data);
      this.hasSearched = false;
    }

    this.hasSearched = true;
    this.blogService.getBlogs().subscribe(data => {
      let filteredBlogs = data;

      if (this.selectedCategory !== this.allCategoryKey) {
        filteredBlogs = filteredBlogs.filter(blog => blog.category === this.selectedCategory);
      }

      if (searchTerm) {
        const blogTitle: string = searchTerm.trim().toLowerCase();
        filteredBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(blogTitle));
      }

      this.blogs = filteredBlogs;
    });
  }

  onCategorySelect(category: string): void {
    this.blogService.getBlogs().subscribe(data => {
      let categoryBlogs: Blog[] = data;
      if (category !== this.allCategoryKey) {
        this.selectedCategory = category;
        categoryBlogs = data.filter(blog => blog.category === category);
      }
      this.blogs = categoryBlogs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
