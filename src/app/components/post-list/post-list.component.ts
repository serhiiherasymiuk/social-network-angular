import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post';
import { IUser } from 'src/app/interfaces/user';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];
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
    id: 0,
    content: "",
    dateCreated: new Date,
    userId: "currentUserId",
    postLikes: [],
    comments: [],
  };
  constructor(private fb: FormBuilder, private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getAll().subscribe(res => console.log(res));
    this.postService.getAll().subscribe(res => this.posts = res);
  }
  postForm = this.fb.group({
    content: [''],
    dateCreated: new Date,
    userId: this.currentUser.Id,
    comments: [],
    postLikes: [],
  });
  addPost() {
    this.postService.create(this.postForm.value as IPost).subscribe();
    this.post.comments = [];
    this.post.postLikes = [];
    if (this.post.content.trim() !== '') {
      this.posts.unshift({...this.post});
      this.post.content = '';
    }
    this.post.content = '';
  }
}
