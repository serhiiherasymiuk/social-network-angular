import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroupChat } from 'src/app/interfaces/groupChat';
import { UserService } from 'src/app/services/user.service';
import { USERS } from '../../chat/user-mock-data';

@Component({
  selector: 'app-group-chat-list',
  templateUrl: './group-chat-list.component.html',
  styleUrls: ['./group-chat-list.component.scss']
})
export class GroupChatListComponent {
  @Input() list:IGroupChat[]=[
    {Id:1,
  Name:"chat",
  Members:USERS,
  Messages:[{
    Id:1,
  Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  DateSent: new Date(2023,4,5,19,2),
  SenderId: "User1",
  GroupChatId: 1
  },
  {
    Id:1,
  Content: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  DateSent: new Date(2023,4,5,19,2),
  SenderId: "User",
  GroupChatId: 1
  },
  {
    Id:1,
  Content: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  DateSent: new Date(2023,4,5,19,2),
  SenderId: "User2",
  GroupChatId: 1
  },
  {
    Id:1,
  Content: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  DateSent: new Date(2023,4,5,19,2),
  SenderId: "User1",
  GroupChatId: 1
  }
]},
  {Id:2,
    Name:"CHAT",
    Members:USERS,
    Messages:[]
  }];

  constructor(private route: ActivatedRoute, private userServise: UserService) {
    // this.route.params.subscribe(params => {
    //   let id = params['id'];
    //   this.userServise.getById(id).subscribe(res=>
    //     this.list=res.groupChats);
    //   });
  }
  
  
}
