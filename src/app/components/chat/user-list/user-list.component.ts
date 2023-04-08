import { Component, Input } from '@angular/core';
import{IUser} from'../../../interfaces/user'
import { USERS } from '../user-mock-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() user: IUser[]=USERS;

  constructor() { }

  ngOnInit() {}
}
