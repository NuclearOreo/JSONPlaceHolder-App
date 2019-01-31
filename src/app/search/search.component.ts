import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username:string = '';
  posts:object;

  constructor(private service:JsonplaceholderService) { }

  ngOnInit() {
  }

  getPostForUser() {
    this.service.getUser(this.username,undefined).subscribe(
      (res) => {
        let user = res;
        if(user[0] != undefined){
          this.service.getPost(user[0].id).subscribe(
            (res) => {
              this.posts = res;
            }
          );
        }
      }
    );
  }

}
