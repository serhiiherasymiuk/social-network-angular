import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { USERS } from './user-mock-data';

import { IIndividualChatMessage } from 'src/app/interfaces/individualChatMessage';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  @Input() user?: IUser;
   
  @Input() message:IIndividualChatMessage={
    Id: 0,
    Content: '',
    DateSent: new Date,
    SenderId: '',
    IndividualChatId: 0
  };
 @Input() messages:IIndividualChatMessage[]=[];
  dat:any;


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {

      let id = params['id'];
      this.user = USERS.find(x => x.id == id);
    });
  }
  ngOnInit(): void {}
  
  sendMessage(){
      console.log(this.message.Content);
      if(this.message.Content.trim()!=='')
    {
     
        this.messages.push({...this.message});
        this.message.Content ='';
    }  
  }
}