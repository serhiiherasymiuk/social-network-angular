import { IComment } from "./comment";
import { IPostLike } from "./postLike";

export interface IPost {
    id: number;
    content: string;
    dateCreated: Date;
    userId: string;
    comments?: IComment[];
    postLikes?: IPostLike[];
}