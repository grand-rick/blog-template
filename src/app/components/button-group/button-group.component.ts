import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})

export class ButtonGroupComponent {
  lineTransform = 'translateX(0)';

  onButtonClick(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const id = button.getAttribute('data-id');

    switch (id) {
      case 'button1':
        this.lineTransform = 'translateX(0)';
        break;
      case 'button2':
        this.lineTransform = 'translateX(33.3%)';
        break;
      case 'button3':
        this.lineTransform = 'translateX(66.6%)';
        break;
      default:
        break;
    }
  }
}
