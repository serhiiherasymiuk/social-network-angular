import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFollow } from 'src/app/interfaces/follow';
import { IUser } from 'src/app/interfaces/user';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isCurrentUserIsOwner: boolean;
  currentUserId: string;
  accountOwnerId: string;
  accountOwner: IUser;
  showUserPosts: boolean = true;
  showUserComments: boolean;
  showUserLikes: boolean;
  isFollowed: boolean = false;
  follows: IFollow[];
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private followService: FollowService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUserId = params['currentUserId'];
      this.accountOwnerId = params['accountOwnerId'];
    });
    if (this.currentUserId == this.accountOwnerId)
      this.isCurrentUserIsOwner = true;
    this.userService.getById(this.accountOwnerId).subscribe(res => this.accountOwner = res)
    this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { 
      this.follows = res;
      if (!this.isCurrentUserIsOwner) {
        this.isFollowed = this.follows.some(follow => follow.followerId == this.currentUserId);
      }
    })
  }
  toggleFollow(): void {
    if (this.isFollowed) {
      const follow = this.follows.find(follow => follow.followerId == this.currentUserId);
      if (follow) {
        this.followService.delete(follow.id).subscribe();
      }
    } 
    else {
      const newFollow: IFollow = {
        id: 0,
        followerId: this.currentUserId,
        followedUserId: this.accountOwnerId,
      };
      this.followService.create(newFollow).subscribe(res => {
        this.follows.push(res);
        this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { this.follows = res })
      });
    }
    this.isFollowed = !this.isFollowed;
  }
  showPosts(): void {
    this.showUserPosts = true;
    this.showUserComments = false;
    this.showUserLikes = false;
  }
  showComments(): void {
    this.showUserPosts = false;
    this.showUserComments = true;
    this.showUserLikes = false;
  }
  showLikes(): void {
    this.showUserPosts = false;
    this.showUserComments = false;
    this.showUserLikes = true;
  }
}
