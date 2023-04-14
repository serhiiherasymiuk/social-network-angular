import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.scss']
})
export class UserPostListComponent implements OnInit {
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getByUserId(this.userId).subscribe(res => this.posts = res)
  }
  @Input() currentUserId: string = ''
  @Input() userId: string = ''
  @Input() posts: IPost[] = [];
  
}
