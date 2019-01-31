import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users:object;

  constructor(private service: JsonplaceholderService) { }

  ngOnInit() {
    this.service.getUser().subscribe(
      (res) => {
        this.users = res;
        console.log(this.users);
      }
    );
  }

}
