import {GameId, GamerEvent, GamerId, NewsletterId} from "../index";

export type RankEvent = {
    category: 'GameVotes' | 'ReviewVotes' | 'UserVotes' | 'UserEvents'
    eventType: GamerEvent['type']
    newsletterId?: NewsletterId
    gameId?: GameId
    voterId?: GamerId
}

export type Gamer = {
    gamerId: GamerId
    mergedGamerIds: GamerId[]
    rankEvents: RankEvent[]
}