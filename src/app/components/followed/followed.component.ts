import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFollow } from 'src/app/interfaces/follow';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { USERS } from '../chat/user-mock-data';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.scss']
})
export class FollowedComponent implements OnInit {
  Followed: IUser[]=[];
  constructor(private route: ActivatedRoute, private userServise: UserService) {

    let followed:IFollow[]=[];
    
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.userServise.getById(id).subscribe(res=>
        followed=res.followedUsers);
      });

    for (let i = 0; i < followed.length; i++) {
      this.userServise.getById(followed[i].FollowedUserId).subscribe(res=>{
        this.Followed.push(res);
      });
    }

  }
  ngOnInit(): void {}
}
