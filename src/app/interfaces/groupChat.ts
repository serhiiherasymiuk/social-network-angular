import { IGroupChatMessage } from "./groupChatMessage";
import { IUser } from "./user";

export interface IGroupChat{
    Id: number;
    Name: string;
    Members: IUser[]; 
    Messages: IGroupChatMessage[];
}