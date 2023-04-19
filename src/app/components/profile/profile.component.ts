import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFollow } from 'src/app/interfaces/follow';
import { IUser } from 'src/app/interfaces/user';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent {
  isCurrentUserIsOwner: boolean;
  currentUserId: string;
  currentUser: IUser;
  accountOwnerId: string;
  accountOwner: IUser = {
    id: '',
    userName: '',
    displayUsername: '',
    email: '',
    dateRegistrated: new Date,
    posts: [],
    comments: [],
    postLikes: [],
    commentLikes: [],
    followers: [],
    followedUsers: [],
    individualChats: [],
    groupChats: [],
    individualChatMessages: [],
    groupChatMessages: [],
    notifications: []
  };
  showUserPosts: boolean;
  showUserComments: boolean;
  isFollowed: boolean = false;
  followers: IFollow[] = [];
  following: IFollow[] = [];
  constructor(private navigation: NavigationService, private route: ActivatedRoute, private userService: UserService, private followService: FollowService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getByUserName(params['userName']).subscribe(res => {
        this.accountOwnerId = res.id
        this.currentUserId = this.userService.getCurrentUserId()
        this.userService.getById(this.currentUserId).subscribe(res => this.currentUser = res)
        if (this.currentUserId == this.accountOwnerId) {
          this.isCurrentUserIsOwner = true;
        }
        else {
          this.isCurrentUserIsOwner = false
        }
        this.userService.getById(this.accountOwnerId).subscribe(res => this.accountOwner = res)
        this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { 
          this.followers = res;
          if (!this.isCurrentUserIsOwner) {
            this.isFollowed = this.followers.some(followers => followers.followerId == this.currentUserId);
          }
        })
        this.followService.getByFollowerId(this.accountOwnerId).subscribe(res => this.following = res )
        this.showPosts()
      })
    });
  }
  goBack() {
    this.navigation.back()
  }
  toggleFollow(): void {
    if (this.isFollowed) {
      const follow = this.followers.find(follow => follow.followerId == this.currentUserId);
      if (follow) {
        this.followService.delete(follow.id).subscribe(res => {
          this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { this.followers = res })
        });
      }
    } 
    else {
      const newFollow: IFollow = {
        id: 0,
        followerId: this.currentUserId,
        followedUserId: this.accountOwnerId,
      };
      this.followService.create(newFollow).subscribe(res => {
        this.followers.push(res);
        this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { this.followers = res })
      });
    }
    this.isFollowed = !this.isFollowed;
  }
  showPosts(): void {
    this.showUserPosts = true;
    this.showUserComments = false;
  }
  showComments(): void {
    this.showUserPosts = false;
    this.showUserComments = true;
  }
}
