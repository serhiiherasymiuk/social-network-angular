import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // get from login or registartion
  currentUserId : string;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId()
    this.userService.getById(this.currentUserId).subscribe(res => this.currentUser = res);
  }
  currentUser: IUser = {
    id: '',
    userName: '',
    displayUsername: '',
    email: '',
    profilePictureUrl: '',
    profileBackgroundUrl: '',
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
    notifications: [],
    dateRegistrated: new Date(),
  };
}
