import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  post: IPost = {
    id: 0,
    content: "",
    dateCreated: new Date,
    userId: '',
    postLikes: [],
    comments: [],
  };
  @Input() currentUserId: string = ''
  @Input() currentUserName: string = ''
  posts: IPost[] = [];
  constructor(private fb: FormBuilder, private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getAll().subscribe(res => this.posts = res);
    //this.postForm.get("userId")?.setValue(this.currentUserId);
  }
  postForm = this.fb.group({
    content: [''],
    dateCreated: new Date,
    userId: '',
    comments: [],
    postLikes: [],
  });
  addPost() {
    if (this.post.content.trim() !== '') {
      this.postForm.value.userId = this.currentUserId;
      this.postService.create(this.postForm.value as IPost).subscribe(res => {
        this.postService.getAll().subscribe(res => this.posts = res);
      });
      this.post.content = '';
    }
  }
}
