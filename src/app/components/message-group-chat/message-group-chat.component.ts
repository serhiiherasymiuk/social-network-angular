import { Component, Input } from '@angular/core';
import { IGroupChatMessage } from 'src/app/interfaces/groupChatMessage';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-message-group-chat',
  templateUrl: './message-group-chat.component.html',
  styleUrls: ['./message-group-chat.component.scss']
})
export class MessageGroupChatComponent {
  @Input() currentUserId: string = "User1";
  @Input() message: IGroupChatMessage={
    Id: 0,
    Content: '',
    DateSent: new Date,
    SenderId: '',
    GroupChatId: 0, 
  }
  
}
