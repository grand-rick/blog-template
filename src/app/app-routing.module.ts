import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full'},
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
