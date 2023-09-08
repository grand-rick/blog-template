import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  clicked: Boolean = false;

  constructor() {}

  ngOnInit(): void {
    const btn = document.querySelector('#menu-btn');
    const nav = document.querySelector('#menu');

    btn?.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav?.classList.toggle('flex');
      nav?.classList.toggle('hidden');
    });
  }
}