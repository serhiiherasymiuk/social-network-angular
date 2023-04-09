import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { ICommentLike } from 'src/app/interfaces/commentLike';
import { CommentLikeService } from 'src/app/services/comment-like.service';

@Component({
  selector: 'app-comment-like',
  templateUrl: './comment-like.component.html',
  styleUrls: ['./comment-like.component.scss']
})
export class CommentLikeComponent implements OnInit {
  constructor(private commentLikeService: CommentLikeService) {}
  ngOnInit(): void {
    this.commentLikeService.getByCommentId(this.comment.id).subscribe(res => {
      const existingLikeIndex = res.findIndex(like => like.userId == this.currentUserId);
      if(existingLikeIndex != undefined && existingLikeIndex >= 0)
        this.liked = true;
    });
  }
  @Input() currentUserId: string = ''
  @Input() comment!: IComment;
  liked: boolean = false;

  toggleLike() {
    this.liked = !this.liked;
    const existingLikeIndex = this.comment?.commentLikes?.findIndex(like => like.userId == this.currentUserId);
    if (existingLikeIndex != undefined && existingLikeIndex >= 0) {
      const existingLikeId = this.comment?.commentLikes?.[existingLikeIndex]?.id ?? 0;
      this.commentLikeService.delete(existingLikeId).subscribe();
      this.comment?.commentLikes?.splice(existingLikeIndex, 1);
    }
    else {
      const newLike: ICommentLike = {
        id: 0,
        userId: this.currentUserId,
        commentId: this.comment?.id || 0
      };
      this.commentLikeService.create(newLike).subscribe(res => {
        this.commentLikeService.getByCommentId(this.comment.id).subscribe(res => this.comment.commentLikes = res)
      })
    }
  }
}
