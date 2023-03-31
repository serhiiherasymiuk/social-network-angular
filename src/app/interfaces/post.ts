import { IPostComment } from "./comment";

export interface IPost {
    Id: number;
    Content: string;
    DateCreated: Date;
    UserId: string;
    PostComments: IPostComment[];
}