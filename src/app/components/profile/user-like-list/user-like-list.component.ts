import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-like-list',
  templateUrl: './user-like-list.component.html',
  styleUrls: ['./user-like-list.component.scss']
})
export class UserLikeListComponent {
  @Input() currentUserId: string = ''
  @Input() userId: string = ''
}
