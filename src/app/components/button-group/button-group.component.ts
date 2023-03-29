import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  activeButton: string = 'button1';
  allBlogs: Blog[] = [];
  allCategories: string[] = ['View All'];

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

  getLineStyle(): string {
    // const buttonElements = document.querySelectorAll('.button');
    // const activeButtonIndex = Array.from(buttonElements).findIndex(button => button.classList.contains('active'));

    // if (activeButtonIndex === -1) {
    //   return 'translateX(-100%)';
    // }

    // const activeButtonElement = buttonElements[activeButtonIndex];
    // const activeButtonRect = activeButtonElement.getBoundingClientRect();
    // const buttonGroupRect = activeButtonElement.parentElement?.getBoundingClientRect();

    // const translateX = activeButtonRect.left - buttonGroupRect.left;
    // const scaleX = activeButtonRect.width / buttonGroupRect.width;

    // return `translateX(${translateX}px) scaleX(${scaleX})`;
    return '404'
  }

  selectCategory(category: string): void {
    this.category.emit(category);
  }
}
