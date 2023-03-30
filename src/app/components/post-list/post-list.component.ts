import { Component } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: IPost[] = [
    {
      Id: 1,
      Content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      DateCreated: new Date(),
      UserId: 'user1',
    },
    {
      Id: 2,
      Content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      DateCreated: new Date(),
      UserId: 'user2',
    },
    {
      Id: 3,
      Content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
      DateCreated: new Date(),
      UserId: 'user3',
    },
  ];
}
