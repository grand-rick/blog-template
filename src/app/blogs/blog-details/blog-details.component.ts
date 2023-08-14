import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/data-access/services/blog.service';
import { Blog } from 'src/app/blogs/data-access/models/Blog';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {
  title: string = '';
  allBlogs: Blog[] = [];
  currentBlog: Blog;
  bodySections: string[] = [];

  constructor(private route: ActivatedRoute, private blogService: BlogService) { 
    this.route.params.subscribe(params => {
      this.title = params['title'] || 'ux-review-presentations'; // use default value of ux-review-presentations if title is not provided
    });
    
    this.currentBlog = {
      id: '1',
      title: 'loading',
      img: 'loading',
      category: 'loading',
      description: 'loading',
      body: 'loading'
    }


    this.blogService.getBlogs().subscribe(data => {
      this.allBlogs = data;

      this.allBlogs.forEach(blog => {
        const blogTitle: string = blog.title.split(' ').join('-').toLowerCase();
        if (blogTitle === this.title) {
          this.currentBlog = blog;
          this.bodySections = this.currentBlog.body.split('#');
        }
      })
    })
  }

  ngOnInit(): void {}
}