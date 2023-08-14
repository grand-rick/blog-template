import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from 'src/app/shared/data-access/services/blog.service';
import { Blog } from 'src/app/blogs/data-access/models/Blog';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  allBlogs: Blog[] = [];
  allCategories: string[] = ['View All'];
  buttonSelected: number = 0;

  @Output() category: EventEmitter<string> = new EventEmitter<string>();

  constructor(private blogService: BlogService) {
    this.blogService.getBlogs().subscribe(data => {
      this.allBlogs = data;

      this.allBlogs.forEach(blog => {
        if (!this.allCategories.includes(blog.category)) {
          this.allCategories.push(blog.category);
        }
      })
    })
  }

  selectCategory(category: string, i: number): void {
    this.buttonSelected = i;
    this.category.emit(category);
  }
}
