import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-user-comment-list',
  templateUrl: './user-comment-list.component.html',
  styleUrls: ['./user-comment-list.component.scss']
})
export class UserCommentListComponent implements OnInit{
  constructor(private commentService: CommentService) {}
  ngOnInit(): void {
    this.commentService.getByUserId(this.userId).subscribe(res => this.comments = res)
  }
  comments: IComment[]
  @Input() currentUserId: string = ''
  @Input() userId: string = ''
}
