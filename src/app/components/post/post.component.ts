import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: IPost = {
    Id: 0,
    Content: '',
    DateCreated: new Date,
    UserId: '',
    PostComments: []
  };
}
