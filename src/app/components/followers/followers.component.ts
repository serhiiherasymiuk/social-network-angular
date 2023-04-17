import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFollow } from 'src/app/interfaces/follow';
import { IUser } from 'src/app/interfaces/user';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent {
  currentUserId: string;
  accountOwnerId: string;
  isCurrentUserIsOwner: boolean = false;
  followers: IUser[] = [];
  currentUserfollowing: IFollow[] = []
  constructor(private route: ActivatedRoute, private userService: UserService, private followService: FollowService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUserId = params['currentUserId'];
      this.accountOwnerId = params['accountOwnerId'];
    });
    if (this.currentUserId == this.accountOwnerId)
      this.isCurrentUserIsOwner = true
    this.userService.GetFollowersByUserId(this.accountOwnerId).subscribe(res => this.followers = res)
    this.followService.getByFollowerId(this.currentUserId).subscribe(res => {
      this.currentUserfollowing = res
    })
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
          this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { this.currentUserfollowing = res })
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
        this.userService.GetFollowersByUserId(this.accountOwnerId).subscribe(res => this.followers = res)
        this.followService.getByFollowerId(this.currentUserId).subscribe(res => {
          this.currentUserfollowing = res
        })
      });
    }
  }
}
