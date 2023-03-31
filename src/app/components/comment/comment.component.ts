import { Component, Input } from '@angular/core';
import { IPostComment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: IPostComment = {
    Id: 0,
    Content: '',
    DateCreated: new Date,
    UserId: '',
    PostId: 0
  };
}
