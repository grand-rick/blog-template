import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm = '';

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}