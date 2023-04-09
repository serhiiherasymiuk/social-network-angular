import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IPost } from '../../interfaces/post';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IComment } from '../../interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

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
  @Input() currentUserName: string = "";
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
  
  constructor(private fb: FormBuilder, private commentService: CommentService) {}
  ngOnInit(): void {
    this.commentForm.get("userId")?.setValue(this.currentUserId);
    this.commentForm.get("postId")?.setValue(this.post.id);
  }
  
  commentForm = this.fb.group({
    content: [''],
    dateCreated: new Date,
    userId: this.currentUserId,
    postId: this.post.id,
    commentLikes: [],
  });

  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }

  addComment() {
    this.comment.commentLikes = [];
    if (this.comment.content.trim() !== '') {
      this.commentService.create(this.commentForm.value as IComment).subscribe(res => {
        this.commentService.getAll().subscribe(res => this.post.comments = res)
      });
      this.comment.content = '';
    }
    this.comment.content = ""
  }
}