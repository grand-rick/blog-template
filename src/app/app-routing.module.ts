import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component'
import { BlogsComponent } from 'src/app/components/blogs/blogs.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/:id', component: BlogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
