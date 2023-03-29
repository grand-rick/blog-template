import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {
  title: string;
  allBlogs: Blog[] = [];
  currentBlog: Blog;
  bodySections: string[] = [];

  constructor(private route: ActivatedRoute, private blogService: BlogService) { 
    this.title = this.route.snapshot.paramMap.get('title') || 'ux-review-presentations';
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


