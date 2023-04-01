import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { IPostLike } from 'src/app/interfaces/postLike';

@Component({
  selector: 'app-post-like',
  templateUrl: './post-like.component.html',
  styleUrls: ['./post-like.component.scss']
})
export class PostLikeComponent {
  @Input() post: IPost | undefined;
  liked = false;

  toggleLike() {
    this.liked = !this.liked;
    const userId = 'user123';
    const existingLikeIndex = this.post?.PostLikes.findIndex(like => like.UserId === userId);
    if (existingLikeIndex !== undefined && existingLikeIndex >= 0) {
      this.post?.PostLikes.splice(existingLikeIndex, 1);
    } 
    else {
      const newLike: IPostLike = {
        Id: 0,
        UserId: userId,
        PostId: this.post?.Id || 0
      };
      this.post?.PostLikes.push(newLike);
    }
  }
}
