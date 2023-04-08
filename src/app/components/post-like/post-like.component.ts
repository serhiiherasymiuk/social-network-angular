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
    if(this.post?.postLikes != undefined) {
      const existingLikeIndex = this.post?.postLikes.findIndex(like => like.UserId === userId);
      if (existingLikeIndex !== undefined && existingLikeIndex >= 0) {
        this.post?.postLikes.splice(existingLikeIndex, 1);
      } 
      else {
        const newLike: IPostLike = {
          Id: 0,
          UserId: userId,
          PostId: this.post?.id || 0
        };
        this.post?.postLikes.push(newLike);
      }
    }
  }
}
