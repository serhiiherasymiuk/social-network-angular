import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { IPostLike } from 'src/app/interfaces/postLike';
import { PostLikeService } from 'src/app/services/post-like.service';

@Component({
  selector: 'app-post-like',
  templateUrl: './post-like.component.html',
  styleUrls: ['./post-like.component.scss']
})
export class PostLikeComponent implements OnInit {
  @Input() post!: IPost;
  @Input() currentUserId: string = ''
  liked = false;


  constructor(private postLikeService: PostLikeService) {}
  ngOnInit(): void {
    this.postLikeService.getByPostId(this.post.id).subscribe(res => {
      const existingLikeIndex = res.findIndex(like => like.userId == this.currentUserId);
      if(existingLikeIndex != undefined && existingLikeIndex >= 0)
        this.liked = true;
    });
  }

  toggleLike() {
    this.liked = !this.liked;
    const existingLikeIndex = this.post?.postLikes?.findIndex(like => like.userId == this.currentUserId);
    if (existingLikeIndex != undefined && existingLikeIndex >= 0) {
      const existingLikeId = this.post?.postLikes?.[existingLikeIndex]?.id ?? 0;
      this.postLikeService.delete(existingLikeId).subscribe();
      this.post?.postLikes?.splice(existingLikeIndex, 1);
    }
    else {
      const newLike: IPostLike = {
        id: 0,
        userId: this.currentUserId,
        postId: this.post?.id || 0
      };
      this.postLikeService.create(newLike).subscribe(res => {
        this.postLikeService.getByPostId(this.post.id).subscribe(res => this.post.postLikes = res)
      })
    }
  }
}
