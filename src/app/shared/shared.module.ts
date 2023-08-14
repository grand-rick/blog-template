import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './ui/footer/footer.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
