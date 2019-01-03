import { RankEvent } from './RankEvent';
import { GamerId } from "../../../../../domain/types";

export class Gamer {
    // @ts-ignore
    private gamerId: GamerId;
    // @ts-ignore
    private mergedGamerIds: GamerId[];
    // @ts-ignore
    private rankEvents: RankEvent[];

    constructor(gamerId: GamerId, mergedGamerIds: GamerId[], rankEvents: RankEvent[]) {
        this.gamerId = gamerId;
        this.mergedGamerIds = mergedGamerIds;
        this.rankEvents = rankEvents;
    }
}
