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

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    //this.userService.setCurrentUserId("3209e5e1-8522-4a4c-83e1-129d63caa50c")
    if (this.userService.getCurrentUserId() != undefined)
      this.userService.getById(this.userService.getCurrentUserId()).subscribe(res => this.currentUser = res);
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
