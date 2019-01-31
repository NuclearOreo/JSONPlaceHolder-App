import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  private comments:any;

  constructor(private service:JsonplaceholderService) { }

  ngOnInit() {
    this.service.getComment().subscribe(
      (res) => {
        this.comments = res;
      }
    )
  }

}
