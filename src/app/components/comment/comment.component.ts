import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: IComment = {
    Id: 0,
    Content: '',
    DateCreated: new Date,
    UserId: '',
    PostId: 0,
    CommentLikes: [],
  };
}
