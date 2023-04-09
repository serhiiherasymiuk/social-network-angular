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
  currentUserId : string = "8262164a-b47c-4d07-ad7c-0e9a218648e5"
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getById(this.currentUserId).subscribe(res => this.currentUser = res);
  }
  currentUser: IUser = {
    id: '',
    userName: '',
    email: '',
    profilePictureUrl: '',
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
}
