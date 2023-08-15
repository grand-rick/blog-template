import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/data-access/services/blog.service';
import { Blog } from 'src/app/blogs/data-access/models/Blog';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {
  constructor (private blogService: BlogService) {}
  private subscription!: Subscription;

  blogs$: Observable<Blog[]> = this.blogService.getBlogs();
  allBlogs: Blog[] = [];
  blogs: Blog[] = [];
  hasSearched: boolean = false;
  allCategoryKey: string = 'View All';
  selectedCategory: string = this.allCategoryKey;
  errorMsg: string = '';


  ngOnInit(): void {
    this.subscription = this.blogs$.subscribe(data => {
      this.allBlogs = data;
      this.blogs = data;
    });
  }

  onSearch(searchTerm: string): void {
    /* Removing white space from the search term. */
    searchTerm = searchTerm.trim().toLowerCase();

    if (!searchTerm) {
      this.blogs = this.allBlogs;
      this.hasSearched = false;
      return;
    }

    this.hasSearched = true;

    let filteredBlogs = this.allBlogs;

    if (this.selectedCategory !== this.allCategoryKey) {
      filteredBlogs = filteredBlogs.filter(blog => blog.category === this.selectedCategory);
    }

    const blogTitle: string = searchTerm.split(' ').join('').toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(blogTitle));

    this.blogs = filteredBlogs;
  }

  onCategorySelect(category: string): void {
    let categoryBlogs: Blog[] = this.allBlogs;
    if (category !== this.allCategoryKey) {
      this.selectedCategory = category;
      categoryBlogs = categoryBlogs.filter(blog => blog.category === category);
    }
    this.blogs = categoryBlogs;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
