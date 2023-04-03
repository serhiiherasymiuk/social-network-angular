import { Component, Input } from '@angular/core';
import{IUser} from'../../../interfaces/user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() user: IUser[]=[
    {
      Id:"user1",
      UserName:"test1",
      Email:"test1@expa.com",
      ProfilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuv23w6aRvepgjHa9wEpbmhTZ_CMiV5jUwecYldQ&s",
      Posts:[],
      Comments: [],
      PostLikes: [],
      CommentLikes: [],
      Followers: [],
      FollowedUsers: [],
      IndividualChats: [],
      GroupChats: [],
      IndividualChatMessages: [],
      GroupChatMessages: [],
      Notifications: []
    },
    {
      Id:"user2",
      UserName:"test2",
      Email:"test2@expa.com",
      ProfilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuv23w6aRvepgjHa9wEpbmhTZ_CMiV5jUwecYldQ&s",
      Posts:[],
      Comments: [],
      PostLikes: [],
      CommentLikes: [],
      Followers: [],
      FollowedUsers: [],
      IndividualChats: [],
      GroupChats: [],
      IndividualChatMessages: [],
      GroupChatMessages: [],
      Notifications: []
    },
    {
      Id:"user3",
      UserName:"test3",
      Email:"test3@expa.com",
      ProfilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuv23w6aRvepgjHa9wEpbmhTZ_CMiV5jUwecYldQ&s",
      Posts:[],
      Comments: [],
      PostLikes: [],
      CommentLikes: [],
      Followers: [],
      FollowedUsers: [],
      IndividualChats: [],
      GroupChats: [],
      IndividualChatMessages: [],
      GroupChatMessages: [],
      Notifications: []
    },
    {
      Id:"user4",
      UserName:"test4",
      Email:"test4@expa.com",
      ProfilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuv23w6aRvepgjHa9wEpbmhTZ_CMiV5jUwecYldQ&s",
      Posts:[],
      Comments: [],
      PostLikes: [],
      CommentLikes: [],
      Followers: [],
      FollowedUsers: [],
      IndividualChats: [],
      GroupChats: [],
      IndividualChatMessages: [],
      GroupChatMessages: [],
      Notifications: []
    }
  ]

  constructor() { }

  ngOnInit() {}
}
