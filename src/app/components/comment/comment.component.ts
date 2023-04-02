import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() currentUserId: string = "";
  @Input() comments: IComment[] = [];
  @Input() comment: IComment = {
    Id: 0,
    Content: '',
    DateCreated: new Date,
    UserId: '',
    PostId: 0,
    CommentLikes: [],
  };
  isEditing: boolean = false;
  editedContent: string = "";
  toggleEditing() {
    this.editedContent = this.comment.Content;
    this.isEditing = !this.isEditing;
  }
  saveComment() {
    if (this.editedContent.trim() !== '') {
      this.comment.Content = this.editedContent;
    }
    this.isEditing = false;
  }
  cancelEditing() {
    this.isEditing = false;
  }
  deleteComment() {
    var index = this.comments.indexOf(this.comment);
    this.comments.splice(index, 1);
  }
}
