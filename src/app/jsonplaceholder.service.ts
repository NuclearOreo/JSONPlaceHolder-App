import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPost(userId?:string){
    if(userId == undefined) {
      return this.http.get(this.url + 'posts');
    } else {
      return this.http.get(this.url + 'posts/?userId=' + userId);
    }

  }

  getComment(postId?:string){
    if(postId == undefined) {
      return this.http.get(this.url + 'comments');
    } else {
      return this.http.get(this.url + 'comments?postId=' + postId);
    }
  }

  getPhoto(){
    return this.http.get(this.url + 'photos');
  }

  getUser(username?:string, id?:string){
    if(username == undefined && id == undefined) {
      return this.http.get(this.url + 'users');
    } else if (username != undefined) {
      return this.http.get(this.url + "users?username=" + username);
    } else if (id != undefined) {
      return this.http.get(this.url + "users?id=" + id);
    }
  }

}
