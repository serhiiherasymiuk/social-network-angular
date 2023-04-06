import { Component } from '@angular/core';
import { IGroupChat } from 'src/app/interfaces/groupChat';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent {
chats: IGroupChat[]=[
  {
    Id:1,
    Name:"chat",
    Members:[],
    Messages:[{
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User1",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User2",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User1",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User2",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User1",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User",
    GroupChatId: 1
    },
    {
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User2",
    GroupChatId: 1
    }]
  },
  {
    Id:2,
    Name:"chat1",
    Members:[],
    Messages:[{
      Id:1,
    Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
    DateSent: new Date(2023,4,5,19,2),
    SenderId: "User1",
    GroupChatId: 1
    }]
  }
]

chat : IGroupChat={
  Id:0,
  Name:"",
  Members:[],
  Messages:[]
  
  // Id:1,
  // Name:"chat",
  // Members:[],
  // Messages:[{
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User1",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User2",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User1",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User2",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User1",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User",
  // GroupChatId: 1
  // },
  // {
  //   Id:1,
  // Content: "ffyfydi uydlhugfhkigjygfthftdhh kjf",
  // DateSent: new Date(2023,4,5,19,2),
  // SenderId: "User2",
  // GroupChatId: 1
  // }]
}
}
