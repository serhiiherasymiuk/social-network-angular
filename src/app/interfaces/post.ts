import { IComment } from "./comment";
import { IPostLike } from "./postLike";

export interface IPost {
    Id: number;
    Content: string;
    DateCreated: Date;
    UserId: string;
    Comments: IComment[];
    PostLikes: IPostLike[];
}