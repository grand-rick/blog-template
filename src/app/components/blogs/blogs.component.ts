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
    this.blogService.getBlogs().subscribe(data => {
      this.allBlogs = data;
      this.currentBlog = this.allBlogs.find(blog => blog.id === this.id);
    })
  }

  ngOnInit(): void {}
}


