import { ICommentLike } from "./commentLike";

export interface IPostComment {
    Id: number;
    Content: string;
    DateCreated: Date;
    UserId: string;
    PostId: number;
    CommentLikes: ICommentLike[];
}