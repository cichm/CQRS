import { Gamer, GamerEvent } from "../types";

export const reduceToGamer = (gamerHistory: GamerEvent[], initialState?: Gamer): Gamer =>
    gamerHistory.reduce(gamerReducer, initialState);

const gamerReducer = (gamer: Gamer, e: GamerEvent): Gamer => {

    switch (e.type) {
        case 'GamerCreated':
            return {
                gamerId: e.payload.gamerId,
                mergedGamerIds: [],
                rankEvents: []
            };
        case 'GamerUpvotedWithGold':
        case 'GamerUpvotedWithSilver':
        case 'GamerUpvotedWithBronze':
        case 'GamerDownvotedWithGold':
        case 'GamerDownvotedWithSilver':
        case 'GamerDownvotedWithBronze':
            return {
                ...gamer,
                rankEvents: [
                    ...gamer.rankEvents,
                    {
                        category: 'GameVotes',
                        eventType: e.type,
                        voterId: e.payload.voterId
                    }
                ]
            }
    }

    return gamer
};