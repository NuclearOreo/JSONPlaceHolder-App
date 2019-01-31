import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { JsonplaceholderService } from './jsonplaceholder.service';
import { ProfileComponent } from './profile/profile.component';
import { CommentsOfComponent } from './comments-of/comments-of.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LostComponent,
    PostsComponent,
    CommentsComponent,
    PhotosComponent,
    UsersComponent,
    ProfileComponent,
    CommentsOfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JsonplaceholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
