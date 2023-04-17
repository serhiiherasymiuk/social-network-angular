
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/chat/user-list/user-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GroupChatMembersComponent } from './components/group-chat-members/group-chat-members.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowersComponent } from './components/followers/followers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:currentUserId/:accountOwnerId', component: ProfileComponent },
  { path: 'chat/:id', component:  ChatComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'users', component:  UserListComponent},
  { path: 'members/:Members', component:  GroupChatMembersComponent},
  { path: 'profile/:currentUserId/:accountOwnerId/following', component:  FollowingComponent},
  { path: 'profile/:currentUserId/:accountOwnerId/followers', component:  FollowersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
