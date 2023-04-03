import { Component } from '@angular/core';
import { IPost } from '../../interfaces/post';
import { IUser } from 'src/app/interfaces/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  currentUser: IUser = {
    Id: "currentUserId",
    UserName: "johndoe",
    Email: "johndoe@example.com",
    ProfilePictureUrl: "https://example.com/profile_picture.jpg",
    Posts: [],
    Comments: [],
    PostLikes: [],
    CommentLikes: [],
    Followers: [],
    FollowedUsers: [],
    IndividualChats: [],
    GroupChats: [],
    IndividualChatMessages: [],
    GroupChatMessages: [],
    Notifications: []
  };
  post: IPost = {
    Id: 0,
    Content: "",
    DateCreated: new Date,
    UserId: "currentUserId",
    PostLikes: [],
    Comments: [],
  };
  constructor(private fb: FormBuilder) {}
  postForm = this.fb.group({
    Content: [''],
    DateCreated: new Date,
    UserId: this.currentUser.Id,
    Comments: [],
    PostLikes: [],
  });
  addPost() {
    console.log(this.postForm.value)
    /*this.post.Comments = [];
    this.post.PostLikes = [];
    if (this.post.Content.trim() !== '') {
      this.posts.unshift({...this.post});
      this.post.Content = '';
    }*/
    this.post.Content = '';
  }
  posts: IPost[] = [
    {
      Id: 1,
      Content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      DateCreated: new Date(),
      UserId: 'user1',
      Comments: [
        {
          Id: 2,
          Content: 'I completely agree with you.',
          DateCreated: new Date(),
          UserId: 'user5',
          PostId: 1,
          CommentLikes: [],
        },
        {
          Id: 3,
          Content: 'This post gave me a lot to think about.',
          DateCreated: new Date(),
          UserId: 'user6',
          PostId: 1,
          CommentLikes: [],
        },
      ],
      PostLikes: [],
    },
    {
      Id: 2,
      Content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      DateCreated: new Date(),
      UserId: 'user2',
      Comments: [],
      PostLikes: [],
    },
    {
      Id: 3,
      Content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
      DateCreated: new Date(),
      UserId: 'user3',
      Comments: [],
      PostLikes: [],
    },
  ];
}
