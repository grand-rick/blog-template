/* The UiModule class is a TypeScript module that imports and declares various Angular modules for UI
components such as button groups and search bars. */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsComponent } from './blogs.component';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    BlogsListComponent,
    BlogDetailsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    UiModule
  ]
})
export class BlogsModule { }
