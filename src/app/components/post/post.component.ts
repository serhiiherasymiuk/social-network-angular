import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{
  @Input() currentUserId: string = ''
  @Input() currentUserName: string = ''
  @Input() posts: IPost[] = [];
  @Input() post: IPost = {
    id: 0,
    content: '',
    dateCreated: new Date,
    userId: this.currentUserId,
    comments: [],
    postLikes: [],
  };
  constructor(private postService: PostService) {}
  isEditing: boolean = false;
  editedContent: string = "";
  toggleEditing() {
    this.editedContent = this.post.content;
    this.isEditing = !this.isEditing;
  }
  savePost() {
    if (this.editedContent.trim() !== '') {
      this.post.content = this.editedContent;
      this.postService.edit(this.post).subscribe();;
    }
    this.isEditing = false;
  }
  cancelEditing() {
    this.isEditing = false;
  }
  deletePost() {
    this.posts.splice(this.posts.indexOf(this.post), 1);
    this.postService.delete(this.post.id).subscribe();;
  }
}
