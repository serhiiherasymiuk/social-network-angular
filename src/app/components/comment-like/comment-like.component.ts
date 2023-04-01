import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { ICommentLike } from 'src/app/interfaces/commentLike';

@Component({
  selector: 'app-comment-like',
  templateUrl: './comment-like.component.html',
  styleUrls: ['./comment-like.component.scss']
})
export class CommentLikeComponent {
  @Input() comment: IComment | undefined;
  liked = false;

  toggleLike() {
    this.liked = !this.liked;
    const userId = 'user123';
    const existingLikeIndex = this.comment?.CommentLikes.findIndex(like => like.UserId === userId);
    if (existingLikeIndex !== undefined && existingLikeIndex >= 0) {
      this.comment?.CommentLikes.splice(existingLikeIndex, 1);
    } 
    else {
      const newLike: ICommentLike = {
        Id: 0,
        UserId: userId,
        CommentId: this.comment?.Id || 0
      };
      this.comment?.CommentLikes.push(newLike);
    }
  }
}
