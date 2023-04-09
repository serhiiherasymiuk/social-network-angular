import { Component, Input } from '@angular/core';
import { IIndividualChatMessage } from 'src/app/interfaces/individualChatMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() currentUserId: string = "";
  @Input() messages: IIndividualChatMessage[] = [];
  @Input() message: IIndividualChatMessage = {
    Id: 0,
    Content: '',
    DateSent: new Date,
    SenderId: '',
    IndividualChatId: 0
  };
}
