import { IComment } from "./comment";
import { ICommentLike } from "./commentLike";
import { IFollow } from "./follow";
import { IGroupChat } from "./groupChat";
import { IGroupChatMessage } from "./groupChatMessage";
import { IIndividualChat } from "./individualChat";
import { IIndividualChatMessage } from "./individualChatMessage";
import { INotification } from "./notification";
import { IPost } from "./post";
import { IPostLike } from "./postLike";

export interface IUser{
    Id: string;
    UserName: string;
    Email: string;
    ProfilePictureUrl: string;
    Posts: IPost[];
    Comments: IComment[];
    PostLikes: IPostLike[];
    CommentLikes: ICommentLike[];
    Followers: IFollow[];
    FollowedUsers: IFollow[];
    IndividualChats: IIndividualChat[];
    GroupChats: IGroupChat[];
    IndividualChatMessages: IIndividualChatMessage[];
    GroupChatMessages: IGroupChatMessage[];
    Notifications: INotification[];
}