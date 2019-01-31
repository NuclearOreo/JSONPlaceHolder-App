import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'users/:username', component: ProfileComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: LostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
