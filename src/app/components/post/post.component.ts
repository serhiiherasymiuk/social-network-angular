import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() currentUserId: string = "";
  @Input() post: IPost = {
    Id: 0,
    Content: '',
    DateCreated: new Date,
    UserId: this.currentUserId,
    Comments: [],
    PostLikes: [],
  };
  isEditing: boolean = false;
  editedContent: string = "";
  toggleEditing() {
    this.editedContent = this.post.Content;
    this.isEditing = !this.isEditing;
  }
  savePost() {
    this.post.Content = this.editedContent;
    this.isEditing = false;
  }
  cancelEditing() {
    this.isEditing = false;
  }
}
