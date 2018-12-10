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
    })
]);