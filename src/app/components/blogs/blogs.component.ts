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
  id: string;
  allBlogs: Blog[] = [];
  currentBlog: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { 
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.currentBlog = {
      id: this.id,
      title: 'loading',
      img: 'loading',
      description: 'loading',
      body: 'loading'
    }
    this.blogService.getBlogs().subscribe(data => {
      this.allBlogs = data;

      this.allBlogs.forEach(blog => {
        if (blog.id === this.id) {
          this.currentBlog = blog;
        }
      })
    })
  }

  ngOnInit(): void {}
}


