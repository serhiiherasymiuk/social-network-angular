import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() post: IPost | undefined;
  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }
}
