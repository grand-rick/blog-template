import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component : BlogsListComponent
  },
  {
    path: ':title',
    component : BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
