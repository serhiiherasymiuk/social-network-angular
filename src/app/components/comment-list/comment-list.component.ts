import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
export class CommentListComponent implements OnInit {
  @Input() currentUserId: string = "";
  @Input() post: IPost = {
    id: 0,
    content: "",
    dateCreated: new Date,
    userId: "",
    postLikes: [],
    comments: [],
  };
  comment: IComment = {
    id: 0,
    content: "",
    dateCreated: new Date,
    userId: "currentUserId",
    postId: 0,
    commentLikes: [],
  };
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.commentForm.get("UserId")?.setValue(this.currentUserId);
  }
  
  commentForm = this.fb.group({
    Content: [''],
    DateCreated: new Date,
    UserId: this.currentUserId,
    PostId: this.post.id,
    CommentLikes: [],
  });

  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }

  addComment() {
    console.log(this.commentForm.value)
    this.comment.commentLikes = [];
    if (this.comment.content.trim() !== '') {
      this.post.comments?.unshift({...this.comment});
      this.comment.content = '';
    }
    this.comment.content = ""
  }
}