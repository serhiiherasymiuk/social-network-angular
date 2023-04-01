import { IIndividualChatMessage } from "./individualChatMessage";

export interface IIndividualChat{
    Id: number;
    User1Id: string;
    User2Id: string;
    Messages: IIndividualChatMessage[];
}