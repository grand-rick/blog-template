import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component'
import { BlogsComponent } from 'src/app/components/blogs/blogs.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/:title', component: BlogsComponent },
  { path: 'blogs', redirectTo: 'blogs/ux-review-presentations', pathMatch: 'full' }, // default value for title parameter is ux-review-presentations
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
