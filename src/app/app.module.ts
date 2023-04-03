import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CDBFreeModule } from 'ng-cdbangular';
import { AlertModule, ButtonModule } from 'ng-cdbangular';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostLikeComponent } from './components/post-like/post-like.component';
import { CommentLikeComponent } from './components/comment-like/comment-like.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/chats/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CommentListComponent,
    PostComponent,
    CommentComponent,
    PostLikeComponent,
    CommentLikeComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    AlertModule,
    ButtonModule,
    CDBFreeModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
