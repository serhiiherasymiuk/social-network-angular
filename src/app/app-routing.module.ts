
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
import { GroupChatListComponent } from './components/group-chat/group-chat-list/group-chat-list.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:userName', component: ProfileComponent },
  { path: 'chat/:id', component:  ChatComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'users', component:  UserListComponent},
  { path: 'members/:Members', component:  GroupChatMembersComponent},
  { path: 'profile/:userName/following', component:  FollowingComponent},
  { path: 'profile/:userName/followers', component:  FollowersComponent},
  { path: 'members', component:  GroupChatMembersComponent},
  { path: 'groups', component:  GroupChatListComponent},
  { path: 'group/:groupChatId', component:  GroupChatComponent},
];

@NgModule({
  imports: [  RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
