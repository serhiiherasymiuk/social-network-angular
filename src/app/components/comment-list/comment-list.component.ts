import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  animations: [
    trigger('showHideComments', [
      state('show', style({
        height: '*',
        opacity: 1,
      })),
      state('hide', style({
        height: 0,
        opacity: 0,
      })),
      transition('show <=> hide', [
        animate('150ms ease-in-out')
      ])
    ])
  ]
})
export class CommentListComponent {
  @Input() post: IPost | undefined;
  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }
}