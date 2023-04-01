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
        padding: 10,
      })),
      state('hide', style({
        height: 0,
        opacity: 0,
        visibility: 'hidden',
        padding: 0,
      })),
      transition('show <=> hide', [
        animate('150ms ease-in-out')
      ])
    ])
  ]
})
export class CommentListComponent {
  comment: IComment = {
    Id: 0,
    Content: "",
    DateCreated: new Date,
    UserId: "this user",
    PostId: 0,
    CommentLikes: [],
  };

  @Input() post: IPost | undefined;
  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }
  addComment() {
    this.comment.CommentLikes = [];
    if (this.comment.Content.trim() !== '') {
      this.post?.Comments.push({...this.comment});
      this.comment.Content = '';
    }
  }
}