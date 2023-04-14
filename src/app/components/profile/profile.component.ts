import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isCurrentUserIsOwner: boolean;
  currentUserId: string;
  accountOwnerId: string;
  accountOwner: IUser;
  showUserPosts: boolean;
  showUserComments: boolean;
  showUserLikes: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUserId = params['currentUserId'];
      this.accountOwnerId = params['accountOwnerId'];
    });
    if (this.currentUserId == this.accountOwnerId)
      this.isCurrentUserIsOwner = true;
    this.userService.getById(this.accountOwnerId).subscribe(res => this.accountOwner = res)
  }
  showPosts(): void {
    this.showUserPosts = true;
    this.showUserComments = false;
    this.showUserLikes = false;
  }
  showComments(): void {
    this.showUserPosts = false;
    this.showUserComments = true;
    this.showUserLikes = false;
  }
  showLikes(): void {
    this.showUserPosts = false;
    this.showUserComments = false;
    this.showUserLikes = true;
  }
}
