import {literal, type, union} from "io-ts";
import * as input from '../input';

export const GamerEvent = union([
    type({
        type: literal('GamerCreated'),
        payload: type({
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('ReviewInvitationAccepted'),
        payload: type({
            reviewOwnerId: input.GamerId,
            gameId: input.GameId,
            newsletterId: input.NewsletterId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GamerUpvotedWithGold'),
        payload: type({
            voterId: input.GamerId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GamerDownvotedWithGold'),
        payload: type({
            voterId: input.GamerId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GamerUpvotedWithSilver'),
        payload: type({
            voterId: input.GamerId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GamerDownvotedWithSilver'),
        payload: type({
            voterId: input.GamerId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GamerUpvotedWithBronze'),
        payload: type({
            voterId: input.GamerId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GamerDownvotedWithBronze'),
        payload: type({
            voterId: input.GamerId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    })
]);