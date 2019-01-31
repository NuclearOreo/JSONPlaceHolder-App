import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.url + 'posts');
  }

  getComment(){
    return this.http.get(this.url + 'comments');
  }

  getPhoto(){
    return this.http.get(this.url + 'photos');
  }

  getUser(username?:string){
    if(username == undefined) {
      return this.http.get(this.url + 'users');
    } else {
      return this.http.get(this.url + "users?username=" + username);
    }
  }

}
