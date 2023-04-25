import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  constructor(private userService: UserService, public accountService: AccountService) {}
  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId()
    if (this.currentUserId != undefined)
      this.userService.getById(this.currentUserId).subscribe(res => this.currentUser = res)
  }
  currentUserId: string = ''
  currentUser: IUser = {
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
  }
}
