import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {

  blogpost$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.blogpost$ = params.slug)
  }

  ngOnInit() {
    this.data.getSinglePost(this.blogpost$)
      .subscribe(
        data => this.blogpost$ = data,
        error => console.log(error)
      )
  }

}
