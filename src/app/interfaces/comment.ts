import { ICommentLike } from "./commentLike";

export interface IComment {
    Id: number;
    Content: string;
    DateCreated: Date;
    UserId: string;
    PostId: number;
    CommentLikes: ICommentLike[];
}