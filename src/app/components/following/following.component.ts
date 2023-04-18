import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFollow } from 'src/app/interfaces/follow';
import { IUser } from 'src/app/interfaces/user';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  currentUserId: string;
  accountOwnerId: string;
  isCurrentUserIsOwner: boolean = false;
  following: IUser[] = []
  currentUserfollowing: IFollow[] = []
  constructor(private route: ActivatedRoute, private userService: UserService, private followService: FollowService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUserId = params['currentUserId'];
      this.accountOwnerId = params['accountOwnerId'];
    });
    if (this.currentUserId == this.accountOwnerId)
      this.isCurrentUserIsOwner = true
    this.userService.getFollowingByUserId(this.accountOwnerId).subscribe(res => this.following = res)
    this.followService.getByFollowerId(this.currentUserId).subscribe(res => this.currentUserfollowing = res)
  }
  isFollow(userId: string): boolean {
    return this.currentUserfollowing.some(follow => follow.followedUserId == userId);
  }
  isCurrentUser(userId: string): boolean {
    return userId == this.currentUserId;
  }
  toggleFollow(userId: string): void {
    if (this.isFollow(userId)) {
      const follow = this.currentUserfollowing.find(follow => follow.followerId == this.currentUserId);
      if (follow) {
        this.followService.delete(follow.id).subscribe(res => {
          this.followService.getByFollowerId(this.currentUserId).subscribe(res => this.currentUserfollowing = res)
          this.userService.getFollowingByUserId(this.accountOwnerId).subscribe(res => this.following = res)
        });
      }
    }
    else {
      const newFollow: IFollow = {
        id: 0,
        followerId: this.currentUserId,
        followedUserId: userId,
      };
      this.followService.create(newFollow).subscribe(res => {
        this.followService.getByFollowerId(this.currentUserId).subscribe(res => this.currentUserfollowing = res)
        this.userService.getFollowingByUserId(this.accountOwnerId).subscribe(res => this.following = res)
      });
    }
  }
}