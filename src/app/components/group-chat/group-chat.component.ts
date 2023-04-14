import { Component, Input } from '@angular/core';
import { IGroupChat } from 'src/app/interfaces/groupChat';
import { USERS } from '../chat/user-mock-data';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent {
  @Input() currentUserId: string = "User1";
  
  constructor() { }

  ngOnInit() {}
  @Input() chat : IGroupChat={

  // Id:0,
  // Name:"",
  // Members:[],
  // Messages:[]
  
  Id:1,
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
]
}
context:string;



send(){
  this.chat.Messages.push({Id:this.chat.Messages.length,Content:this.context,DateSent:new Date(),SenderId:this.currentUserId,GroupChatId:this.chat.Id});
}
}
