import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  clicked: Boolean = false;
  
  menuBtnToggleClasses = {
    open: !this.clicked
  }

  menuToggleClasses = {
    flex: !this.clicked,
    hidden: !this.clicked
  }

  constructor() {}

  ngOnInit(): void {
    // let btn: HTMLElement = this.elementRef.nativeElement.querySelector('#menu-btn');
    // let nav: HTMLElement = this.elementRef.nativeElement.querySelector('#menu');

    // btn.addEventListener('click', () => {
    //   btn.classList.toggle('open');
    //   nav.classList.toggle('flex');
    //   nav.classList.toggle('hidden');
    // });
  }
}