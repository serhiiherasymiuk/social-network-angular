import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { UserPostListComponent } from './components/profile/user-post-list/user-post-list.component';
import { UserCommentListComponent } from './components/profile/user-comment-list/user-comment-list.component';
import { GroupChatMembersComponent } from './components/group-chat-members/group-chat-members.component';
import { PostLikeListComponent } from './components/post-like-list/post-like-list.component';
import { CommentLikeListComponent } from './components/comment-like-list/comment-like-list.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowersComponent } from './components/followers/followers.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { NavigationService } from './services/navigation.service';
import { GroupChatListComponent } from './components/group-chat/group-chat-list/group-chat-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UnathorizedMenuComponent } from './components/unathorized-menu/unathorized-menu.component';

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
    UserPostListComponent,
    UserCommentListComponent,
    GroupChatMembersComponent,
    PostLikeListComponent,
    CommentLikeListComponent,
    FollowingComponent,
    FollowersComponent,
    BackButtonDirective,
    GroupChatListComponent,
    UnathorizedMenuComponent,
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
