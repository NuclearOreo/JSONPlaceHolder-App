import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: object;

  constructor(private service: JsonplaceholderService) { }

  ngOnInit() {
    this.service.getPhoto().subscribe(
      (res) => {
        this.photos = res;
      }
    );
  }

}
