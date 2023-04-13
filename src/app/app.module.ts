import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostLikeComponent } from './components/post-like/post-like.component';
import { CommentLikeComponent } from './components/comment-like/comment-like.component';;

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from './material/material.module';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { MessageGroupChatComponent } from './components/message-group-chat/message-group-chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserListComponent } from './components/chat/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageComponent } from './components/chat/message/message.component';
import { MatChip } from '@angular/material/chips';
import { GroupChatMembersComponent } from './components/group-chat-members/group-chat-members.component';
import { FollowedComponent } from './components/followed/followed.component';
import { NewChatComponent } from './components/new-chat/new-chat.component';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CommentListComponent,
    PostComponent,
    CommentComponent,
    PostLikeComponent,
    CommentLikeComponent,
    GroupChatComponent,
    MessageGroupChatComponent,
    HomeComponent,
    SideMenuComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChatComponent,
    UserListComponent,
    MessageComponent,
    GroupChatMembersComponent,
    FollowedComponent,
    NewChatComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    AppRoutingModule,

    ReactiveFormsModule,
    MatChipsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
