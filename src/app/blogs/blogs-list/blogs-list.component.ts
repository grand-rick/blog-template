import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/blogs/data-access/models/Blog';

@Component({
  selector: 'blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent {
  @Input() blogs: Blog[] = [];

  ngOnInit(): void {}
}
