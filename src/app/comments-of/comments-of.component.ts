import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-comments-of',
  templateUrl: './comments-of.component.html',
  styleUrls: ['./comments-of.component.css']
})
export class CommentsOfComponent implements OnInit {
  private comments:object;
  private user:object;

  constructor(private route: ActivatedRoute, private service:JsonplaceholderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (res) => {
        let postId = res.get('postId');
        this.service.getComment(postId).subscribe(
          (res) => {
            this.comments = res;
          }
        );
        this.service.getUser(undefined,postId).subscribe(
          (res) => {
            this.user = res;
            console.log(this.user);
          }
        );
      }
    );
  }

}
