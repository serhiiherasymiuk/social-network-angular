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
    id: string;
    userName: string;
    displayUsername: string;
    email: string;
    profilePictureUrl?: string | null;
    profileBackgroundUrl?: string | null;
    dateRegistrated: Date;
    posts: IPost[];
    comments: IComment[];
    postLikes: IPostLike[];
    commentLikes: ICommentLike[];
    followers: IFollow[];
    followedUsers: IFollow[];
    individualChats: IIndividualChat[];
    groupChats: IGroupChat[];
    individualChatMessages: IIndividualChatMessage[];
    groupChatMessages: IGroupChatMessage[];
    notifications: INotification[];
}