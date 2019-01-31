import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:JsonplaceholderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (res) => {
        let username = res.get("username");
        this.service.getUser(username).subscribe(
          (res) => {
            console.log(res);
          }
        );
      }
    );
  }

}
