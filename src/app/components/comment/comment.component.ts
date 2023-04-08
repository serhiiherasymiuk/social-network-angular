import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() currentUserId: string = "";
  @Input() comments: IComment[] | undefined = [] ;
  @Input() comment: IComment = {
    id: 0,
    content: '',
    dateCreated: new Date,
    userId: '',
    postId: 0,
    commentLikes: [],
  };
  isEditing: boolean = false;
  editedContent: string = "";
  toggleEditing() {
    this.editedContent = this.comment.content;
    this.isEditing = !this.isEditing;
  }
  saveComment() {
    if (this.editedContent.trim() !== '') {
      this.comment.content = this.editedContent;
    }
    this.isEditing = false;
  }
  cancelEditing() {
    this.isEditing = false;
  }
  deleteComment() {
    var index = this.comments?.indexOf(this.comment);
    if (index != undefined)
      this.comments?.splice(index, 1);
  }
}
