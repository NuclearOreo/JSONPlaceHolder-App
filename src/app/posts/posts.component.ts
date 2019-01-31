import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private list:any;

  constructor(private service: JsonplaceholderService) { }

  ngOnInit() {
    this.service.getPost().subscribe(
      (res) => {
      this.list = res;
    }
  );
  }
}
