import {GameId, GamerEvent, GamerId, NewsletterId} from "../../../../../domain/types";

export class RankEvent {
    // @ts-ignore
    private category: RankEvent["category"];
    // @ts-ignore
    private eventType: GamerEvent['eventType'];
    // @ts-ignore
    private newsletterId?: NewsletterId;
    // @ts-ignore
    private gameId?: GameId;
    // @ts-ignore
    private voterId?: GamerId;

    constructor(category: RankEvent["category"], eventType: GamerEvent['type'], newsletterId: NewsletterId, gameId: GameId, voterId: GamerId) {
        this.category = category;
        this.eventType = eventType;
        this.newsletterId = newsletterId;
        this.gameId = gameId;
        this.voterId = voterId;
    }
}