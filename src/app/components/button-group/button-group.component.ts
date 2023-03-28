import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  activeButton: string = 'button1';

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
}
