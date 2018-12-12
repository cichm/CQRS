import * as input from '../input'
import { literal, type, union } from "io-ts";

export const GameEvent = union([
    type({
        type: literal('GamePlayed'),
        payload: type({
            gameId: input.GameId,
            newsletterId: input.NewsletterId,
            ownerId: input.GamerId,
            timestamp: input.Timestamp
        })
    }),

    type({
        type: literal('GameEnd'),
        payload: type({
            gameId: input.GameId,
            gamerId: input.GamerId,
            timestamp: input.Timestamp
        })
    })
]);