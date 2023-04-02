import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IComment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  animations: [
    trigger('showHideComments', [
      state('show', style({
        height: '*',
        opacity: 1,
        visibility: 'visible',
        'padding-top': 10,
      })),
      state('hide', style({
        height: 0,
        opacity: 0,
        visibility: 'hidden',
        'padding-top': 0,
      })),
      transition('show <=> hide', [
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class CommentListComponent {
  @Input() currentUserId: string = "";
  comment: IComment = {
    Id: 0,
    Content: "",
    DateCreated: new Date,
    UserId: "currentUserId",
    PostId: 0,
    CommentLikes: [],
  };
  @Input() post: IPost = {
    Id: 0,
    Content: "",
    DateCreated: new Date,
    UserId: "",
    PostLikes: [],
    Comments: [],
  };
  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }
  addComment() {
    this.comment.CommentLikes = [];
    if (this.comment.Content.trim() !== '') {
      this.post?.Comments.unshift({...this.comment});
      this.comment.Content = '';
    }
  }
}