import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchBarComponent,
    ButtonGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    ButtonGroupComponent
  ]
})
export class UiModule { }
