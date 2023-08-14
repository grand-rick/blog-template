import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/data-access/services/blog.service';
import { Blog } from 'src/app/blogs/data-access/models/Blog';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  blogs$: Observable<Blog[]> = this.blogService.getBlogs();
  hasSearched: boolean = false;
  allCategoryKey: string = 'View All';
  selectedCategory: string = this.allCategoryKey;
  errorMsg: string = '';

  constructor (private blogService: BlogService) {}

  ngOnInit(): void {}

  onSearch(searchTerm: string): void {
    /* Removing white space from the search term. */
    searchTerm = searchTerm.trim().toLowerCase();

    if (!searchTerm) {
      this.blogs$ = this.blogService.getBlogs();
      this.hasSearched = false;
    }

    this.blogs$ = this.blogs$.pipe(
      map((data: Blog[]) => {
        let filteredBlogs: Blog[] = data;
        if (this.selectedCategory !== this.allCategoryKey) {
          filteredBlogs = filteredBlogs.filter(blog => blog.category === this.selectedCategory);
        }
  
        if (searchTerm) {
          const blogTitle: string = searchTerm.toLowerCase().split(' ').join('');
          filteredBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(blogTitle));
        }
        return filteredBlogs;
      })
    );
  }

  onCategorySelect(category: string): void {
    this.blogs$ = this.blogService.getBlogs();
    this.blogs$ = this.blogs$.pipe(
      map((data: Blog[]) => {
        let blogs: Blog[] = data;
        if (category === this.allCategoryKey) {
          this.selectedCategory = this.allCategoryKey;
        } else {
          this.selectedCategory = category;
          blogs = data.filter(blog => blog.category === category);
        }
        return blogs;
      })
    );
  }
}
