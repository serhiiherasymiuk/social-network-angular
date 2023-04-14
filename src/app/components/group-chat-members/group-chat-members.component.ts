import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { USERS } from '../chat/user-mock-data';

@Component({
  selector: 'app-group-chat-members',
  templateUrl: './group-chat-members.component.html',
  styleUrls: ['./group-chat-members.component.scss']
})
export class GroupChatMembersComponent  implements OnInit{
  @Input() Members: IUser[]=[];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      //this.Members = params['Members'];
    });
  }
  ngOnInit(): void {}
}
